# `locationApiKey` Submodule <a name="`locationApiKey` Submodule" id="@cdktn/provider-awscc.locationApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocationApiKey <a name="LocationApiKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key awscc_location_api_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKey;

LocationApiKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyName(java.lang.String)
    .restrictions(LocationApiKeyRestrictions)
//  .description(java.lang.String)
//  .expireTime(java.lang.String)
//  .forceDelete(java.lang.Boolean|IResolvable)
//  .forceUpdate(java.lang.Boolean|IResolvable)
//  .noExpiry(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<LocationApiKeyTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#description LocationApiKey#description}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.expireTime">expireTime</a></code> | <code>java.lang.String</code> | The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ). |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.noExpiry">noExpiry</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}.

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.restrictions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#description LocationApiKey#description}.

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.expireTime"></a>

- *Type:* java.lang.String

The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#expire_time LocationApiKey#expire_time}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}.

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forceUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}.

---

##### `noExpiry`<sup>Optional</sup> <a name="noExpiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.noExpiry"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#tags LocationApiKey#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions">putRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetNoExpiry">resetNoExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRestrictions` <a name="putRestrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions"></a>

```java
public void putRestrictions(LocationApiKeyRestrictions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LocationApiKeyTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetExpireTime"></a>

```java
public void resetExpireTime()
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceUpdate"></a>

```java
public void resetForceUpdate()
```

##### `resetNoExpiry` <a name="resetNoExpiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetNoExpiry"></a>

```java
public void resetNoExpiry()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LocationApiKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKey;

LocationApiKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKey;

LocationApiKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKey;

LocationApiKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKey;

LocationApiKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LocationApiKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LocationApiKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LocationApiKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LocationApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LocationApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference">LocationApiKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList">LocationApiKeyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTimeInput">expireTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdateInput">forceUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiryInput">noExpiryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictionsInput">restrictionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiry">noExpiry</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictions"></a>

```java
public LocationApiKeyRestrictionsOutputReference getRestrictions();
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference">LocationApiKeyRestrictionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tags"></a>

```java
public LocationApiKeyTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList">LocationApiKeyTagsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTimeInput"></a>

```java
public java.lang.String getExpireTimeInput();
```

- *Type:* java.lang.String

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getForceDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `noExpiryInput`<sup>Optional</sup> <a name="noExpiryInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiryInput"></a>

```java
public java.lang.Boolean|IResolvable getNoExpiryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictionsInput"></a>

```java
public IResolvable|LocationApiKeyRestrictions getRestrictionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LocationApiKeyTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDelete"></a>

```java
public java.lang.Boolean|IResolvable getForceDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdate"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `noExpiry`<sup>Required</sup> <a name="noExpiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiry"></a>

```java
public java.lang.Boolean|IResolvable getNoExpiry();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LocationApiKeyConfig <a name="LocationApiKeyConfig" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyConfig;

LocationApiKeyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyName(java.lang.String)
    .restrictions(LocationApiKeyRestrictions)
//  .description(java.lang.String)
//  .expireTime(java.lang.String)
//  .forceDelete(java.lang.Boolean|IResolvable)
//  .forceUpdate(java.lang.Boolean|IResolvable)
//  .noExpiry(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<LocationApiKeyTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#description LocationApiKey#description}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ). |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.noExpiry">noExpiry</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}.

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.restrictions"></a>

```java
public LocationApiKeyRestrictions getRestrictions();
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#description LocationApiKey#description}.

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#expire_time LocationApiKey#expire_time}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceDelete"></a>

```java
public java.lang.Boolean|IResolvable getForceDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}.

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceUpdate"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}.

---

##### `noExpiry`<sup>Optional</sup> <a name="noExpiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.noExpiry"></a>

```java
public java.lang.Boolean|IResolvable getNoExpiry();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LocationApiKeyTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#tags LocationApiKey#tags}

---

### LocationApiKeyRestrictions <a name="LocationApiKeyRestrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyRestrictions;

LocationApiKeyRestrictions.builder()
    .allowActions(java.util.List<java.lang.String>)
    .allowResources(java.util.List<java.lang.String>)
//  .allowAndroidApps(IResolvable|java.util.List<LocationApiKeyRestrictionsAllowAndroidApps>)
//  .allowAppleApps(IResolvable|java.util.List<LocationApiKeyRestrictionsAllowAppleApps>)
//  .allowReferers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowActions">allowActions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#allow_actions LocationApiKey#allow_actions}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowResources">allowResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#allow_resources LocationApiKey#allow_resources}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAndroidApps">allowAndroidApps</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#allow_android_apps LocationApiKey#allow_android_apps}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAppleApps">allowAppleApps</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#allow_apple_apps LocationApiKey#allow_apple_apps}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowReferers">allowReferers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#allow_referers LocationApiKey#allow_referers}. |

---

##### `allowActions`<sup>Required</sup> <a name="allowActions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowActions"></a>

```java
public java.util.List<java.lang.String> getAllowActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#allow_actions LocationApiKey#allow_actions}.

---

##### `allowResources`<sup>Required</sup> <a name="allowResources" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowResources"></a>

```java
public java.util.List<java.lang.String> getAllowResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#allow_resources LocationApiKey#allow_resources}.

---

##### `allowAndroidApps`<sup>Optional</sup> <a name="allowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAndroidApps"></a>

```java
public IResolvable|java.util.List<LocationApiKeyRestrictionsAllowAndroidApps> getAllowAndroidApps();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#allow_android_apps LocationApiKey#allow_android_apps}.

---

##### `allowAppleApps`<sup>Optional</sup> <a name="allowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAppleApps"></a>

```java
public IResolvable|java.util.List<LocationApiKeyRestrictionsAllowAppleApps> getAllowAppleApps();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#allow_apple_apps LocationApiKey#allow_apple_apps}.

---

##### `allowReferers`<sup>Optional</sup> <a name="allowReferers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowReferers"></a>

```java
public java.util.List<java.lang.String> getAllowReferers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#allow_referers LocationApiKey#allow_referers}.

---

### LocationApiKeyRestrictionsAllowAndroidApps <a name="LocationApiKeyRestrictionsAllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyRestrictionsAllowAndroidApps;

LocationApiKeyRestrictionsAllowAndroidApps.builder()
//  .certificateFingerprint(java.lang.String)
//  .package(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.certificateFingerprint">certificateFingerprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#certificate_fingerprint LocationApiKey#certificate_fingerprint}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.package">package</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#package LocationApiKey#package}. |

---

##### `certificateFingerprint`<sup>Optional</sup> <a name="certificateFingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.certificateFingerprint"></a>

```java
public java.lang.String getCertificateFingerprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#certificate_fingerprint LocationApiKey#certificate_fingerprint}.

---

##### `package`<sup>Optional</sup> <a name="package" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#package LocationApiKey#package}.

---

### LocationApiKeyRestrictionsAllowAppleApps <a name="LocationApiKeyRestrictionsAllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyRestrictionsAllowAppleApps;

LocationApiKeyRestrictionsAllowAppleApps.builder()
//  .bundleId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#bundle_id LocationApiKey#bundle_id}. |

---

##### `bundleId`<sup>Optional</sup> <a name="bundleId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#bundle_id LocationApiKey#bundle_id}.

---

### LocationApiKeyTags <a name="LocationApiKeyTags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyTags;

LocationApiKeyTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#key LocationApiKey#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/location_api_key#value LocationApiKey#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LocationApiKeyRestrictionsAllowAndroidAppsList <a name="LocationApiKeyRestrictionsAllowAndroidAppsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyRestrictionsAllowAndroidAppsList;

new LocationApiKeyRestrictionsAllowAndroidAppsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get"></a>

```java
public LocationApiKeyRestrictionsAllowAndroidAppsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LocationApiKeyRestrictionsAllowAndroidApps> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>>

---


### LocationApiKeyRestrictionsAllowAndroidAppsOutputReference <a name="LocationApiKeyRestrictionsAllowAndroidAppsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference;

new LocationApiKeyRestrictionsAllowAndroidAppsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetCertificateFingerprint">resetCertificateFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetPackage">resetPackage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateFingerprint` <a name="resetCertificateFingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetCertificateFingerprint"></a>

```java
public void resetCertificateFingerprint()
```

##### `resetPackage` <a name="resetPackage" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetPackage"></a>

```java
public void resetPackage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprintInput">certificateFingerprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.packageInput">packageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprint">certificateFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.package">package</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateFingerprintInput`<sup>Optional</sup> <a name="certificateFingerprintInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprintInput"></a>

```java
public java.lang.String getCertificateFingerprintInput();
```

- *Type:* java.lang.String

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.packageInput"></a>

```java
public java.lang.String getPackageInput();
```

- *Type:* java.lang.String

---

##### `certificateFingerprint`<sup>Required</sup> <a name="certificateFingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprint"></a>

```java
public java.lang.String getCertificateFingerprint();
```

- *Type:* java.lang.String

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.package"></a>

```java
public java.lang.String getPackage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.internalValue"></a>

```java
public IResolvable|LocationApiKeyRestrictionsAllowAndroidApps getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>

---


### LocationApiKeyRestrictionsAllowAppleAppsList <a name="LocationApiKeyRestrictionsAllowAppleAppsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyRestrictionsAllowAppleAppsList;

new LocationApiKeyRestrictionsAllowAppleAppsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get"></a>

```java
public LocationApiKeyRestrictionsAllowAppleAppsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LocationApiKeyRestrictionsAllowAppleApps> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>>

---


### LocationApiKeyRestrictionsAllowAppleAppsOutputReference <a name="LocationApiKeyRestrictionsAllowAppleAppsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyRestrictionsAllowAppleAppsOutputReference;

new LocationApiKeyRestrictionsAllowAppleAppsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resetBundleId">resetBundleId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBundleId` <a name="resetBundleId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resetBundleId"></a>

```java
public void resetBundleId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleIdInput">bundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleIdInput"></a>

```java
public java.lang.String getBundleIdInput();
```

- *Type:* java.lang.String

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.internalValue"></a>

```java
public IResolvable|LocationApiKeyRestrictionsAllowAppleApps getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>

---


### LocationApiKeyRestrictionsOutputReference <a name="LocationApiKeyRestrictionsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyRestrictionsOutputReference;

new LocationApiKeyRestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps">putAllowAndroidApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps">putAllowAppleApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAndroidApps">resetAllowAndroidApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAppleApps">resetAllowAppleApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowReferers">resetAllowReferers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowAndroidApps` <a name="putAllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps"></a>

```java
public void putAllowAndroidApps(IResolvable|java.util.List<LocationApiKeyRestrictionsAllowAndroidApps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>>

---

##### `putAllowAppleApps` <a name="putAllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps"></a>

```java
public void putAllowAppleApps(IResolvable|java.util.List<LocationApiKeyRestrictionsAllowAppleApps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>>

---

##### `resetAllowAndroidApps` <a name="resetAllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAndroidApps"></a>

```java
public void resetAllowAndroidApps()
```

##### `resetAllowAppleApps` <a name="resetAllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAppleApps"></a>

```java
public void resetAllowAppleApps()
```

##### `resetAllowReferers` <a name="resetAllowReferers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowReferers"></a>

```java
public void resetAllowReferers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidApps">allowAndroidApps</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList">LocationApiKeyRestrictionsAllowAndroidAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleApps">allowAppleApps</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList">LocationApiKeyRestrictionsAllowAppleAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActionsInput">allowActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidAppsInput">allowAndroidAppsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleAppsInput">allowAppleAppsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferersInput">allowReferersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResourcesInput">allowResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActions">allowActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferers">allowReferers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResources">allowResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowAndroidApps`<sup>Required</sup> <a name="allowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidApps"></a>

```java
public LocationApiKeyRestrictionsAllowAndroidAppsList getAllowAndroidApps();
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList">LocationApiKeyRestrictionsAllowAndroidAppsList</a>

---

##### `allowAppleApps`<sup>Required</sup> <a name="allowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleApps"></a>

```java
public LocationApiKeyRestrictionsAllowAppleAppsList getAllowAppleApps();
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList">LocationApiKeyRestrictionsAllowAppleAppsList</a>

---

##### `allowActionsInput`<sup>Optional</sup> <a name="allowActionsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActionsInput"></a>

```java
public java.util.List<java.lang.String> getAllowActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowAndroidAppsInput`<sup>Optional</sup> <a name="allowAndroidAppsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidAppsInput"></a>

```java
public IResolvable|java.util.List<LocationApiKeyRestrictionsAllowAndroidApps> getAllowAndroidAppsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>>

---

##### `allowAppleAppsInput`<sup>Optional</sup> <a name="allowAppleAppsInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleAppsInput"></a>

```java
public IResolvable|java.util.List<LocationApiKeyRestrictionsAllowAppleApps> getAllowAppleAppsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>>

---

##### `allowReferersInput`<sup>Optional</sup> <a name="allowReferersInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferersInput"></a>

```java
public java.util.List<java.lang.String> getAllowReferersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowResourcesInput`<sup>Optional</sup> <a name="allowResourcesInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResourcesInput"></a>

```java
public java.util.List<java.lang.String> getAllowResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowActions`<sup>Required</sup> <a name="allowActions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActions"></a>

```java
public java.util.List<java.lang.String> getAllowActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowReferers`<sup>Required</sup> <a name="allowReferers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferers"></a>

```java
public java.util.List<java.lang.String> getAllowReferers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowResources`<sup>Required</sup> <a name="allowResources" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResources"></a>

```java
public java.util.List<java.lang.String> getAllowResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.internalValue"></a>

```java
public IResolvable|LocationApiKeyRestrictions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

---


### LocationApiKeyTagsList <a name="LocationApiKeyTagsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyTagsList;

new LocationApiKeyTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get"></a>

```java
public LocationApiKeyTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LocationApiKeyTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>>

---


### LocationApiKeyTagsOutputReference <a name="LocationApiKeyTagsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.location_api_key.LocationApiKeyTagsOutputReference;

new LocationApiKeyTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LocationApiKeyTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>

---



