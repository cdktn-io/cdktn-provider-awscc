# `customerprofilesObjectType` Submodule <a name="`customerprofilesObjectType` Submodule" id="@cdktn/provider-awscc.customerprofilesObjectType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesObjectType <a name="CustomerprofilesObjectType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type awscc_customerprofiles_object_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectType;

CustomerprofilesObjectType.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .domainName(java.lang.String)
    .objectTypeName(java.lang.String)
//  .allowProfileCreation(java.lang.Boolean|IResolvable)
//  .encryptionKey(java.lang.String)
//  .expirationDays(java.lang.Number)
//  .fields(IResolvable|java.util.List<CustomerprofilesObjectTypeFields>)
//  .keys(IResolvable|java.util.List<CustomerprofilesObjectTypeKeys>)
//  .maxProfileObjectCount(java.lang.Number)
//  .sourceLastUpdatedTimestampFormat(java.lang.String)
//  .sourcePriority(java.lang.Number)
//  .tags(IResolvable|java.util.List<CustomerprofilesObjectTypeTags>)
//  .templateId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the profile object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.objectTypeName">objectTypeName</a></code> | <code>java.lang.String</code> | The name of the profile object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.allowProfileCreation">allowProfileCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether a profile should be created when data is received. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | The default encryption key. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.expirationDays">expirationDays</a></code> | <code>java.lang.Number</code> | The default number of days until the data within the domain expires. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>></code> | A list of the name and ObjectType field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.keys">keys</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>></code> | A list of unique keys that can be used to map data to the profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.maxProfileObjectCount">maxProfileObjectCount</a></code> | <code>java.lang.Number</code> | The maximum number of profile objects for this object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.sourceLastUpdatedTimestampFormat">sourceLastUpdatedTimestampFormat</a></code> | <code>java.lang.String</code> | The format of your sourceLastUpdatedTimestamp that was previously set up. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.sourcePriority">sourcePriority</a></code> | <code>java.lang.Number</code> | Defines the priority order of object types. Lower value indicates higher priority. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>></code> | The tags (keys and values) associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.templateId">templateId</a></code> | <code>java.lang.String</code> | A unique identifier for the object template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#description CustomerprofilesObjectType#description}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#domain_name CustomerprofilesObjectType#domain_name}

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.objectTypeName"></a>

- *Type:* java.lang.String

The name of the profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#object_type_name CustomerprofilesObjectType#object_type_name}

---

##### `allowProfileCreation`<sup>Optional</sup> <a name="allowProfileCreation" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.allowProfileCreation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether a profile should be created when data is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#allow_profile_creation CustomerprofilesObjectType#allow_profile_creation}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.encryptionKey"></a>

- *Type:* java.lang.String

The default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#encryption_key CustomerprofilesObjectType#encryption_key}

---

##### `expirationDays`<sup>Optional</sup> <a name="expirationDays" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.expirationDays"></a>

- *Type:* java.lang.Number

The default number of days until the data within the domain expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#expiration_days CustomerprofilesObjectType#expiration_days}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.fields"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>>

A list of the name and ObjectType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#fields CustomerprofilesObjectType#fields}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.keys"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>>

A list of unique keys that can be used to map data to the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#keys CustomerprofilesObjectType#keys}

---

##### `maxProfileObjectCount`<sup>Optional</sup> <a name="maxProfileObjectCount" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.maxProfileObjectCount"></a>

- *Type:* java.lang.Number

The maximum number of profile objects for this object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#max_profile_object_count CustomerprofilesObjectType#max_profile_object_count}

---

##### `sourceLastUpdatedTimestampFormat`<sup>Optional</sup> <a name="sourceLastUpdatedTimestampFormat" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.sourceLastUpdatedTimestampFormat"></a>

- *Type:* java.lang.String

The format of your sourceLastUpdatedTimestamp that was previously set up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#source_last_updated_timestamp_format CustomerprofilesObjectType#source_last_updated_timestamp_format}

---

##### `sourcePriority`<sup>Optional</sup> <a name="sourcePriority" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.sourcePriority"></a>

- *Type:* java.lang.Number

Defines the priority order of object types. Lower value indicates higher priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#source_priority CustomerprofilesObjectType#source_priority}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>>

The tags (keys and values) associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#tags CustomerprofilesObjectType#tags}

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.templateId"></a>

- *Type:* java.lang.String

A unique identifier for the object template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#template_id CustomerprofilesObjectType#template_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putKeys">putKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetAllowProfileCreation">resetAllowProfileCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetExpirationDays">resetExpirationDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetKeys">resetKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetMaxProfileObjectCount">resetMaxProfileObjectCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourceLastUpdatedTimestampFormat">resetSourceLastUpdatedTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourcePriority">resetSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTemplateId">resetTemplateId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<CustomerprofilesObjectTypeFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>>

---

##### `putKeys` <a name="putKeys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putKeys"></a>

```java
public void putKeys(IResolvable|java.util.List<CustomerprofilesObjectTypeKeys> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putKeys.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CustomerprofilesObjectTypeTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>>

---

##### `resetAllowProfileCreation` <a name="resetAllowProfileCreation" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetAllowProfileCreation"></a>

```java
public void resetAllowProfileCreation()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetExpirationDays` <a name="resetExpirationDays" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetExpirationDays"></a>

```java
public void resetExpirationDays()
```

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetFields"></a>

```java
public void resetFields()
```

##### `resetKeys` <a name="resetKeys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetKeys"></a>

```java
public void resetKeys()
```

##### `resetMaxProfileObjectCount` <a name="resetMaxProfileObjectCount" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetMaxProfileObjectCount"></a>

```java
public void resetMaxProfileObjectCount()
```

##### `resetSourceLastUpdatedTimestampFormat` <a name="resetSourceLastUpdatedTimestampFormat" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourceLastUpdatedTimestampFormat"></a>

```java
public void resetSourceLastUpdatedTimestampFormat()
```

##### `resetSourcePriority` <a name="resetSourcePriority" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourcePriority"></a>

```java
public void resetSourcePriority()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateId` <a name="resetTemplateId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTemplateId"></a>

```java
public void resetTemplateId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesObjectType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isConstruct"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectType;

CustomerprofilesObjectType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectType;

CustomerprofilesObjectType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectType;

CustomerprofilesObjectType.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectType;

CustomerprofilesObjectType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CustomerprofilesObjectType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CustomerprofilesObjectType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CustomerprofilesObjectType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CustomerprofilesObjectType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesObjectType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList">CustomerprofilesObjectTypeFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keys">keys</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList">CustomerprofilesObjectTypeKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxAvailableProfileObjectCount">maxAvailableProfileObjectCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList">CustomerprofilesObjectTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreationInput">allowProfileCreationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDaysInput">expirationDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keysInput">keysInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCountInput">maxProfileObjectCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeNameInput">objectTypeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormatInput">sourceLastUpdatedTimestampFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriorityInput">sourcePriorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateIdInput">templateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreation">allowProfileCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDays">expirationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCount">maxProfileObjectCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeName">objectTypeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormat">sourceLastUpdatedTimestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriority">sourcePriority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateId">templateId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fields"></a>

```java
public CustomerprofilesObjectTypeFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList">CustomerprofilesObjectTypeFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keys"></a>

```java
public CustomerprofilesObjectTypeKeysList getKeys();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList">CustomerprofilesObjectTypeKeysList</a>

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `maxAvailableProfileObjectCount`<sup>Required</sup> <a name="maxAvailableProfileObjectCount" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxAvailableProfileObjectCount"></a>

```java
public java.lang.Number getMaxAvailableProfileObjectCount();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tags"></a>

```java
public CustomerprofilesObjectTypeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList">CustomerprofilesObjectTypeTagsList</a>

---

##### `allowProfileCreationInput`<sup>Optional</sup> <a name="allowProfileCreationInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreationInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowProfileCreationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKeyInput"></a>

```java
public java.lang.String getEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `expirationDaysInput`<sup>Optional</sup> <a name="expirationDaysInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDaysInput"></a>

```java
public java.lang.Number getExpirationDaysInput();
```

- *Type:* java.lang.Number

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>>

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keysInput"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeKeys> getKeysInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>>

---

##### `maxProfileObjectCountInput`<sup>Optional</sup> <a name="maxProfileObjectCountInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCountInput"></a>

```java
public java.lang.Number getMaxProfileObjectCountInput();
```

- *Type:* java.lang.Number

---

##### `objectTypeNameInput`<sup>Optional</sup> <a name="objectTypeNameInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeNameInput"></a>

```java
public java.lang.String getObjectTypeNameInput();
```

- *Type:* java.lang.String

---

##### `sourceLastUpdatedTimestampFormatInput`<sup>Optional</sup> <a name="sourceLastUpdatedTimestampFormatInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormatInput"></a>

```java
public java.lang.String getSourceLastUpdatedTimestampFormatInput();
```

- *Type:* java.lang.String

---

##### `sourcePriorityInput`<sup>Optional</sup> <a name="sourcePriorityInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriorityInput"></a>

```java
public java.lang.Number getSourcePriorityInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>>

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateIdInput"></a>

```java
public java.lang.String getTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `allowProfileCreation`<sup>Required</sup> <a name="allowProfileCreation" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreation"></a>

```java
public java.lang.Boolean|IResolvable getAllowProfileCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

---

##### `expirationDays`<sup>Required</sup> <a name="expirationDays" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDays"></a>

```java
public java.lang.Number getExpirationDays();
```

- *Type:* java.lang.Number

---

##### `maxProfileObjectCount`<sup>Required</sup> <a name="maxProfileObjectCount" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCount"></a>

```java
public java.lang.Number getMaxProfileObjectCount();
```

- *Type:* java.lang.Number

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeName"></a>

```java
public java.lang.String getObjectTypeName();
```

- *Type:* java.lang.String

---

##### `sourceLastUpdatedTimestampFormat`<sup>Required</sup> <a name="sourceLastUpdatedTimestampFormat" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormat"></a>

```java
public java.lang.String getSourceLastUpdatedTimestampFormat();
```

- *Type:* java.lang.String

---

##### `sourcePriority`<sup>Required</sup> <a name="sourcePriority" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriority"></a>

```java
public java.lang.Number getSourcePriority();
```

- *Type:* java.lang.Number

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesObjectTypeConfig <a name="CustomerprofilesObjectTypeConfig" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeConfig;

CustomerprofilesObjectTypeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .domainName(java.lang.String)
    .objectTypeName(java.lang.String)
//  .allowProfileCreation(java.lang.Boolean|IResolvable)
//  .encryptionKey(java.lang.String)
//  .expirationDays(java.lang.Number)
//  .fields(IResolvable|java.util.List<CustomerprofilesObjectTypeFields>)
//  .keys(IResolvable|java.util.List<CustomerprofilesObjectTypeKeys>)
//  .maxProfileObjectCount(java.lang.Number)
//  .sourceLastUpdatedTimestampFormat(java.lang.String)
//  .sourcePriority(java.lang.Number)
//  .tags(IResolvable|java.util.List<CustomerprofilesObjectTypeTags>)
//  .templateId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the profile object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.objectTypeName">objectTypeName</a></code> | <code>java.lang.String</code> | The name of the profile object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.allowProfileCreation">allowProfileCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether a profile should be created when data is received. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | The default encryption key. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.expirationDays">expirationDays</a></code> | <code>java.lang.Number</code> | The default number of days until the data within the domain expires. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>></code> | A list of the name and ObjectType field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.keys">keys</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>></code> | A list of unique keys that can be used to map data to the profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.maxProfileObjectCount">maxProfileObjectCount</a></code> | <code>java.lang.Number</code> | The maximum number of profile objects for this object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourceLastUpdatedTimestampFormat">sourceLastUpdatedTimestampFormat</a></code> | <code>java.lang.String</code> | The format of your sourceLastUpdatedTimestamp that was previously set up. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourcePriority">sourcePriority</a></code> | <code>java.lang.Number</code> | Defines the priority order of object types. Lower value indicates higher priority. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>></code> | The tags (keys and values) associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.templateId">templateId</a></code> | <code>java.lang.String</code> | A unique identifier for the object template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#description CustomerprofilesObjectType#description}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#domain_name CustomerprofilesObjectType#domain_name}

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.objectTypeName"></a>

```java
public java.lang.String getObjectTypeName();
```

- *Type:* java.lang.String

The name of the profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#object_type_name CustomerprofilesObjectType#object_type_name}

---

##### `allowProfileCreation`<sup>Optional</sup> <a name="allowProfileCreation" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.allowProfileCreation"></a>

```java
public java.lang.Boolean|IResolvable getAllowProfileCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether a profile should be created when data is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#allow_profile_creation CustomerprofilesObjectType#allow_profile_creation}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

The default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#encryption_key CustomerprofilesObjectType#encryption_key}

---

##### `expirationDays`<sup>Optional</sup> <a name="expirationDays" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.expirationDays"></a>

```java
public java.lang.Number getExpirationDays();
```

- *Type:* java.lang.Number

The default number of days until the data within the domain expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#expiration_days CustomerprofilesObjectType#expiration_days}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.fields"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>>

A list of the name and ObjectType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#fields CustomerprofilesObjectType#fields}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.keys"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeKeys> getKeys();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>>

A list of unique keys that can be used to map data to the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#keys CustomerprofilesObjectType#keys}

---

##### `maxProfileObjectCount`<sup>Optional</sup> <a name="maxProfileObjectCount" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.maxProfileObjectCount"></a>

```java
public java.lang.Number getMaxProfileObjectCount();
```

- *Type:* java.lang.Number

The maximum number of profile objects for this object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#max_profile_object_count CustomerprofilesObjectType#max_profile_object_count}

---

##### `sourceLastUpdatedTimestampFormat`<sup>Optional</sup> <a name="sourceLastUpdatedTimestampFormat" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourceLastUpdatedTimestampFormat"></a>

```java
public java.lang.String getSourceLastUpdatedTimestampFormat();
```

- *Type:* java.lang.String

The format of your sourceLastUpdatedTimestamp that was previously set up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#source_last_updated_timestamp_format CustomerprofilesObjectType#source_last_updated_timestamp_format}

---

##### `sourcePriority`<sup>Optional</sup> <a name="sourcePriority" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourcePriority"></a>

```java
public java.lang.Number getSourcePriority();
```

- *Type:* java.lang.Number

Defines the priority order of object types. Lower value indicates higher priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#source_priority CustomerprofilesObjectType#source_priority}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>>

The tags (keys and values) associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#tags CustomerprofilesObjectType#tags}

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

A unique identifier for the object template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#template_id CustomerprofilesObjectType#template_id}

---

### CustomerprofilesObjectTypeFields <a name="CustomerprofilesObjectTypeFields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeFields;

CustomerprofilesObjectTypeFields.builder()
//  .name(java.lang.String)
//  .objectTypeField(CustomerprofilesObjectTypeFieldsObjectTypeField)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.objectTypeField">objectTypeField</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a></code> | Represents a field in a ProfileObjectType. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}.

---

##### `objectTypeField`<sup>Optional</sup> <a name="objectTypeField" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.objectTypeField"></a>

```java
public CustomerprofilesObjectTypeFieldsObjectTypeField getObjectTypeField();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a>

Represents a field in a ProfileObjectType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#object_type_field CustomerprofilesObjectType#object_type_field}

---

### CustomerprofilesObjectTypeFieldsObjectTypeField <a name="CustomerprofilesObjectTypeFieldsObjectTypeField" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeFieldsObjectTypeField;

CustomerprofilesObjectTypeFieldsObjectTypeField.builder()
//  .contentType(java.lang.String)
//  .source(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.contentType">contentType</a></code> | <code>java.lang.String</code> | The content type of the field. Used for determining equality when searching. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.source">source</a></code> | <code>java.lang.String</code> | A field of a ProfileObject. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.target">target</a></code> | <code>java.lang.String</code> | The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode. |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

The content type of the field. Used for determining equality when searching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#content_type CustomerprofilesObjectType#content_type}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

A field of a ProfileObject.

For example: _source.FirstName, where "_source" is a ProfileObjectType of a Zendesk user and "FirstName" is a field in that ObjectType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#source CustomerprofilesObjectType#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#target CustomerprofilesObjectType#target}

---

### CustomerprofilesObjectTypeKeys <a name="CustomerprofilesObjectTypeKeys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeKeys;

CustomerprofilesObjectTypeKeys.builder()
//  .name(java.lang.String)
//  .objectTypeKeyList(IResolvable|java.util.List<CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.objectTypeKeyList">objectTypeKeyList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#object_type_key_list CustomerprofilesObjectType#object_type_key_list}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}.

---

##### `objectTypeKeyList`<sup>Optional</sup> <a name="objectTypeKeyList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.objectTypeKeyList"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct> getObjectTypeKeyList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#object_type_key_list CustomerprofilesObjectType#object_type_key_list}.

---

### CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct <a name="CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct;

CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.builder()
//  .fieldNames(java.util.List<java.lang.String>)
//  .standardIdentifiers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.fieldNames">fieldNames</a></code> | <code>java.util.List<java.lang.String></code> | The reference for the key name of the fields map. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.standardIdentifiers">standardIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | The types of keys that a ProfileObject can have. |

---

##### `fieldNames`<sup>Optional</sup> <a name="fieldNames" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.fieldNames"></a>

```java
public java.util.List<java.lang.String> getFieldNames();
```

- *Type:* java.util.List<java.lang.String>

The reference for the key name of the fields map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#field_names CustomerprofilesObjectType#field_names}

---

##### `standardIdentifiers`<sup>Optional</sup> <a name="standardIdentifiers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.standardIdentifiers"></a>

```java
public java.util.List<java.lang.String> getStandardIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

The types of keys that a ProfileObject can have.

Each ProfileObject can have only 1 UNIQUE key but multiple PROFILE keys. PROFILE means that this key can be used to tie an object to a PROFILE. UNIQUE means that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it will be used to search for profiles after all other PROFILE keys have been searched. A LOOKUP_ONLY key is only used to match a profile but is not persisted to be used for searching of the profile. A NEW_ONLY key is only used if the profile does not already exist before the object is ingested, otherwise it is only used for matching objects to profiles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#standard_identifiers CustomerprofilesObjectType#standard_identifiers}

---

### CustomerprofilesObjectTypeTags <a name="CustomerprofilesObjectTypeTags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeTags;

CustomerprofilesObjectTypeTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#key CustomerprofilesObjectType#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#value CustomerprofilesObjectType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#key CustomerprofilesObjectType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_object_type#value CustomerprofilesObjectType#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesObjectTypeFieldsList <a name="CustomerprofilesObjectTypeFieldsList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeFieldsList;

new CustomerprofilesObjectTypeFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.get"></a>

```java
public CustomerprofilesObjectTypeFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>>

---


### CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference <a name="CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference;

new CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesObjectTypeFieldsObjectTypeField getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a>

---


### CustomerprofilesObjectTypeFieldsOutputReference <a name="CustomerprofilesObjectTypeFieldsOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeFieldsOutputReference;

new CustomerprofilesObjectTypeFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.putObjectTypeField">putObjectTypeField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetObjectTypeField">resetObjectTypeField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectTypeField` <a name="putObjectTypeField" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.putObjectTypeField"></a>

```java
public void putObjectTypeField(CustomerprofilesObjectTypeFieldsObjectTypeField value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.putObjectTypeField.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetObjectTypeField` <a name="resetObjectTypeField" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetObjectTypeField"></a>

```java
public void resetObjectTypeField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeField">objectTypeField</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference">CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeFieldInput">objectTypeFieldInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectTypeField`<sup>Required</sup> <a name="objectTypeField" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeField"></a>

```java
public CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference getObjectTypeField();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference">CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectTypeFieldInput`<sup>Optional</sup> <a name="objectTypeFieldInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeFieldInput"></a>

```java
public IResolvable|CustomerprofilesObjectTypeFieldsObjectTypeField getObjectTypeFieldInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesObjectTypeFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>

---


### CustomerprofilesObjectTypeKeysList <a name="CustomerprofilesObjectTypeKeysList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeKeysList;

new CustomerprofilesObjectTypeKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.get"></a>

```java
public CustomerprofilesObjectTypeKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeKeys> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>>

---


### CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList <a name="CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList;

new CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.get"></a>

```java
public CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>>

---


### CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference <a name="CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference;

new CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetFieldNames">resetFieldNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetStandardIdentifiers">resetStandardIdentifiers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldNames` <a name="resetFieldNames" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetFieldNames"></a>

```java
public void resetFieldNames()
```

##### `resetStandardIdentifiers` <a name="resetStandardIdentifiers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetStandardIdentifiers"></a>

```java
public void resetStandardIdentifiers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNamesInput">fieldNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiersInput">standardIdentifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNames">fieldNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiers">standardIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldNamesInput`<sup>Optional</sup> <a name="fieldNamesInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNamesInput"></a>

```java
public java.util.List<java.lang.String> getFieldNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `standardIdentifiersInput`<sup>Optional</sup> <a name="standardIdentifiersInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiersInput"></a>

```java
public java.util.List<java.lang.String> getStandardIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldNames`<sup>Required</sup> <a name="fieldNames" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNames"></a>

```java
public java.util.List<java.lang.String> getFieldNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `standardIdentifiers`<sup>Required</sup> <a name="standardIdentifiers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiers"></a>

```java
public java.util.List<java.lang.String> getStandardIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>

---


### CustomerprofilesObjectTypeKeysOutputReference <a name="CustomerprofilesObjectTypeKeysOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeKeysOutputReference;

new CustomerprofilesObjectTypeKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.putObjectTypeKeyList">putObjectTypeKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetObjectTypeKeyList">resetObjectTypeKeyList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectTypeKeyList` <a name="putObjectTypeKeyList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.putObjectTypeKeyList"></a>

```java
public void putObjectTypeKeyList(IResolvable|java.util.List<CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.putObjectTypeKeyList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetObjectTypeKeyList` <a name="resetObjectTypeKeyList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetObjectTypeKeyList"></a>

```java
public void resetObjectTypeKeyList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyList">objectTypeKeyList</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList">CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyListInput">objectTypeKeyListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectTypeKeyList`<sup>Required</sup> <a name="objectTypeKeyList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyList"></a>

```java
public CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList getObjectTypeKeyList();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList">CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectTypeKeyListInput`<sup>Optional</sup> <a name="objectTypeKeyListInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyListInput"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct> getObjectTypeKeyListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesObjectTypeKeys getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>

---


### CustomerprofilesObjectTypeTagsList <a name="CustomerprofilesObjectTypeTagsList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeTagsList;

new CustomerprofilesObjectTypeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.get"></a>

```java
public CustomerprofilesObjectTypeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CustomerprofilesObjectTypeTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>>

---


### CustomerprofilesObjectTypeTagsOutputReference <a name="CustomerprofilesObjectTypeTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_object_type.CustomerprofilesObjectTypeTagsOutputReference;

new CustomerprofilesObjectTypeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesObjectTypeTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>

---



