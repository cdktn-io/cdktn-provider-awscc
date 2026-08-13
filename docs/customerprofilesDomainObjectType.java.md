# `customerprofilesDomainObjectType` Submodule <a name="`customerprofilesDomainObjectType` Submodule" id="@cdktn/provider-awscc.customerprofilesDomainObjectType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesDomainObjectType <a name="CustomerprofilesDomainObjectType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type awscc_customerprofiles_domain_object_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectType;

CustomerprofilesDomainObjectType.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .fields(IResolvable|java.util.Map<java.lang.String, CustomerprofilesDomainObjectTypeFields>)
    .objectTypeName(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKey(java.lang.String)
//  .tags(IResolvable|java.util.List<CustomerprofilesDomainObjectTypeTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>></code> | A map of the name and ObjectType field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.objectTypeName">objectTypeName</a></code> | <code>java.lang.String</code> | The name of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | The default encryption key. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#domain_name CustomerprofilesDomainObjectType#domain_name}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.fields"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>>

A map of the name and ObjectType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#fields CustomerprofilesDomainObjectType#fields}

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.objectTypeName"></a>

- *Type:* java.lang.String

The name of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#object_type_name CustomerprofilesDomainObjectType#object_type_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#description CustomerprofilesDomainObjectType#description}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.encryptionKey"></a>

- *Type:* java.lang.String

The default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#encryption_key CustomerprofilesDomainObjectType#encryption_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#tags CustomerprofilesDomainObjectType#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields"></a>

```java
public void putFields(IResolvable|java.util.Map<java.lang.String, CustomerprofilesDomainObjectTypeFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CustomerprofilesDomainObjectTypeTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesDomainObjectType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectType;

CustomerprofilesDomainObjectType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectType;

CustomerprofilesDomainObjectType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectType;

CustomerprofilesDomainObjectType.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectType;

CustomerprofilesDomainObjectType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CustomerprofilesDomainObjectType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CustomerprofilesDomainObjectType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CustomerprofilesDomainObjectType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CustomerprofilesDomainObjectType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesDomainObjectType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap">CustomerprofilesDomainObjectTypeFieldsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList">CustomerprofilesDomainObjectTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeNameInput">objectTypeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeName">objectTypeName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fields"></a>

```java
public CustomerprofilesDomainObjectTypeFieldsMap getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap">CustomerprofilesDomainObjectTypeFieldsMap</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tags"></a>

```java
public CustomerprofilesDomainObjectTypeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList">CustomerprofilesDomainObjectTypeTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKeyInput"></a>

```java
public java.lang.String getEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fieldsInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, CustomerprofilesDomainObjectTypeFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>>

---

##### `objectTypeNameInput`<sup>Optional</sup> <a name="objectTypeNameInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeNameInput"></a>

```java
public java.lang.String getObjectTypeNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CustomerprofilesDomainObjectTypeTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeName"></a>

```java
public java.lang.String getObjectTypeName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesDomainObjectTypeConfig <a name="CustomerprofilesDomainObjectTypeConfig" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectTypeConfig;

CustomerprofilesDomainObjectTypeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .fields(IResolvable|java.util.Map<java.lang.String, CustomerprofilesDomainObjectTypeFields>)
    .objectTypeName(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKey(java.lang.String)
//  .tags(IResolvable|java.util.List<CustomerprofilesDomainObjectTypeTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>></code> | A map of the name and ObjectType field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.objectTypeName">objectTypeName</a></code> | <code>java.lang.String</code> | The name of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | The default encryption key. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#domain_name CustomerprofilesDomainObjectType#domain_name}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.fields"></a>

```java
public IResolvable|java.util.Map<java.lang.String, CustomerprofilesDomainObjectTypeFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>>

A map of the name and ObjectType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#fields CustomerprofilesDomainObjectType#fields}

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.objectTypeName"></a>

```java
public java.lang.String getObjectTypeName();
```

- *Type:* java.lang.String

The name of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#object_type_name CustomerprofilesDomainObjectType#object_type_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#description CustomerprofilesDomainObjectType#description}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

The default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#encryption_key CustomerprofilesDomainObjectType#encryption_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CustomerprofilesDomainObjectTypeTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#tags CustomerprofilesDomainObjectType#tags}

---

### CustomerprofilesDomainObjectTypeFields <a name="CustomerprofilesDomainObjectTypeFields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectTypeFields;

CustomerprofilesDomainObjectTypeFields.builder()
//  .contentType(java.lang.String)
//  .featureType(java.lang.String)
//  .source(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.contentType">contentType</a></code> | <code>java.lang.String</code> | The content type of the field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.featureType">featureType</a></code> | <code>java.lang.String</code> | The feature type of the field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.source">source</a></code> | <code>java.lang.String</code> | The source field name. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.target">target</a></code> | <code>java.lang.String</code> | The target field name. |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

The content type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#content_type CustomerprofilesDomainObjectType#content_type}

---

##### `featureType`<sup>Optional</sup> <a name="featureType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.featureType"></a>

```java
public java.lang.String getFeatureType();
```

- *Type:* java.lang.String

The feature type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#feature_type CustomerprofilesDomainObjectType#feature_type}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#source CustomerprofilesDomainObjectType#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

The target field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#target CustomerprofilesDomainObjectType#target}

---

### CustomerprofilesDomainObjectTypeTags <a name="CustomerprofilesDomainObjectTypeTags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectTypeTags;

CustomerprofilesDomainObjectTypeTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#key CustomerprofilesDomainObjectType#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_domain_object_type#value CustomerprofilesDomainObjectType#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesDomainObjectTypeFieldsMap <a name="CustomerprofilesDomainObjectTypeFieldsMap" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectTypeFieldsMap;

new CustomerprofilesDomainObjectTypeFieldsMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get"></a>

```java
public CustomerprofilesDomainObjectTypeFieldsOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, CustomerprofilesDomainObjectTypeFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>>

---


### CustomerprofilesDomainObjectTypeFieldsOutputReference <a name="CustomerprofilesDomainObjectTypeFieldsOutputReference" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectTypeFieldsOutputReference;

new CustomerprofilesDomainObjectTypeFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetFeatureType">resetFeatureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetFeatureType` <a name="resetFeatureType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetFeatureType"></a>

```java
public void resetFeatureType()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureTypeInput">featureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureType">featureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `featureTypeInput`<sup>Optional</sup> <a name="featureTypeInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureTypeInput"></a>

```java
public java.lang.String getFeatureTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureType"></a>

```java
public java.lang.String getFeatureType();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesDomainObjectTypeFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>

---


### CustomerprofilesDomainObjectTypeTagsList <a name="CustomerprofilesDomainObjectTypeTagsList" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectTypeTagsList;

new CustomerprofilesDomainObjectTypeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get"></a>

```java
public CustomerprofilesDomainObjectTypeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CustomerprofilesDomainObjectTypeTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>>

---


### CustomerprofilesDomainObjectTypeTagsOutputReference <a name="CustomerprofilesDomainObjectTypeTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_domain_object_type.CustomerprofilesDomainObjectTypeTagsOutputReference;

new CustomerprofilesDomainObjectTypeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesDomainObjectTypeTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>

---



