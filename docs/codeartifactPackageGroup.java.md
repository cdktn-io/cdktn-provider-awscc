# `codeartifactPackageGroup` Submodule <a name="`codeartifactPackageGroup` Submodule" id="@cdktn/provider-awscc.codeartifactPackageGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactPackageGroup <a name="CodeartifactPackageGroup" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group awscc_codeartifact_package_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroup;

CodeartifactPackageGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .pattern(java.lang.String)
//  .contactInfo(java.lang.String)
//  .description(java.lang.String)
//  .domainOwner(java.lang.String)
//  .originConfiguration(CodeartifactPackageGroupOriginConfiguration)
//  .tags(IResolvable|java.util.List<CodeartifactPackageGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | The name of the domain that contains the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.pattern">pattern</a></code> | <code>java.lang.String</code> | The package group pattern that is used to gather packages. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.contactInfo">contactInfo</a></code> | <code>java.lang.String</code> | The contact info of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The text description of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | The 12-digit account ID of the AWS account that owns the domain. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.originConfiguration">originConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | The package origin configuration of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>></code> | An array of key-value pairs to apply to the package group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

The name of the domain that contains the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#domain_name CodeartifactPackageGroup#domain_name}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.pattern"></a>

- *Type:* java.lang.String

The package group pattern that is used to gather packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#pattern CodeartifactPackageGroup#pattern}

---

##### `contactInfo`<sup>Optional</sup> <a name="contactInfo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.contactInfo"></a>

- *Type:* java.lang.String

The contact info of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#contact_info CodeartifactPackageGroup#contact_info}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The text description of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#description CodeartifactPackageGroup#description}

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.domainOwner"></a>

- *Type:* java.lang.String

The 12-digit account ID of the AWS account that owns the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#domain_owner CodeartifactPackageGroup#domain_owner}

---

##### `originConfiguration`<sup>Optional</sup> <a name="originConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.originConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

The package origin configuration of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#origin_configuration CodeartifactPackageGroup#origin_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>>

An array of key-value pairs to apply to the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#tags CodeartifactPackageGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration">putOriginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetContactInfo">resetContactInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDomainOwner">resetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOriginConfiguration">resetOriginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOriginConfiguration` <a name="putOriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration"></a>

```java
public void putOriginConfiguration(CodeartifactPackageGroupOriginConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CodeartifactPackageGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>>

---

##### `resetContactInfo` <a name="resetContactInfo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetContactInfo"></a>

```java
public void resetContactInfo()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDomainOwner` <a name="resetDomainOwner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDomainOwner"></a>

```java
public void resetDomainOwner()
```

##### `resetOriginConfiguration` <a name="resetOriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOriginConfiguration"></a>

```java
public void resetOriginConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodeartifactPackageGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroup;

CodeartifactPackageGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroup;

CodeartifactPackageGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroup;

CodeartifactPackageGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroup;

CodeartifactPackageGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodeartifactPackageGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CodeartifactPackageGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodeartifactPackageGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodeartifactPackageGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CodeartifactPackageGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfiguration">originConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference">CodeartifactPackageGroupOriginConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList">CodeartifactPackageGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfoInput">contactInfoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwnerInput">domainOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfigurationInput">originConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfo">contactInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `originConfiguration`<sup>Required</sup> <a name="originConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfiguration"></a>

```java
public CodeartifactPackageGroupOriginConfigurationOutputReference getOriginConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference">CodeartifactPackageGroupOriginConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tags"></a>

```java
public CodeartifactPackageGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList">CodeartifactPackageGroupTagsList</a>

---

##### `contactInfoInput`<sup>Optional</sup> <a name="contactInfoInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfoInput"></a>

```java
public java.lang.String getContactInfoInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `domainOwnerInput`<sup>Optional</sup> <a name="domainOwnerInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwnerInput"></a>

```java
public java.lang.String getDomainOwnerInput();
```

- *Type:* java.lang.String

---

##### `originConfigurationInput`<sup>Optional</sup> <a name="originConfigurationInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfigurationInput"></a>

```java
public IResolvable|CodeartifactPackageGroupOriginConfiguration getOriginConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CodeartifactPackageGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>>

---

##### `contactInfo`<sup>Required</sup> <a name="contactInfo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfo"></a>

```java
public java.lang.String getContactInfo();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `domainOwner`<sup>Required</sup> <a name="domainOwner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwner"></a>

```java
public java.lang.String getDomainOwner();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactPackageGroupConfig <a name="CodeartifactPackageGroupConfig" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupConfig;

CodeartifactPackageGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .pattern(java.lang.String)
//  .contactInfo(java.lang.String)
//  .description(java.lang.String)
//  .domainOwner(java.lang.String)
//  .originConfiguration(CodeartifactPackageGroupOriginConfiguration)
//  .tags(IResolvable|java.util.List<CodeartifactPackageGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | The name of the domain that contains the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.pattern">pattern</a></code> | <code>java.lang.String</code> | The package group pattern that is used to gather packages. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.contactInfo">contactInfo</a></code> | <code>java.lang.String</code> | The contact info of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | The text description of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | The 12-digit account ID of the AWS account that owns the domain. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.originConfiguration">originConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | The package origin configuration of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>></code> | An array of key-value pairs to apply to the package group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

The name of the domain that contains the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#domain_name CodeartifactPackageGroup#domain_name}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

The package group pattern that is used to gather packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#pattern CodeartifactPackageGroup#pattern}

---

##### `contactInfo`<sup>Optional</sup> <a name="contactInfo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.contactInfo"></a>

```java
public java.lang.String getContactInfo();
```

- *Type:* java.lang.String

The contact info of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#contact_info CodeartifactPackageGroup#contact_info}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The text description of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#description CodeartifactPackageGroup#description}

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainOwner"></a>

```java
public java.lang.String getDomainOwner();
```

- *Type:* java.lang.String

The 12-digit account ID of the AWS account that owns the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#domain_owner CodeartifactPackageGroup#domain_owner}

---

##### `originConfiguration`<sup>Optional</sup> <a name="originConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.originConfiguration"></a>

```java
public CodeartifactPackageGroupOriginConfiguration getOriginConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

The package origin configuration of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#origin_configuration CodeartifactPackageGroup#origin_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CodeartifactPackageGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>>

An array of key-value pairs to apply to the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#tags CodeartifactPackageGroup#tags}

---

### CodeartifactPackageGroupOriginConfiguration <a name="CodeartifactPackageGroupOriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupOriginConfiguration;

CodeartifactPackageGroupOriginConfiguration.builder()
//  .restrictions(CodeartifactPackageGroupOriginConfigurationRestrictions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | The origin configuration that is applied to the package group. |

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.property.restrictions"></a>

```java
public CodeartifactPackageGroupOriginConfigurationRestrictions getRestrictions();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

The origin configuration that is applied to the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#restrictions CodeartifactPackageGroup#restrictions}

---

### CodeartifactPackageGroupOriginConfigurationRestrictions <a name="CodeartifactPackageGroupOriginConfigurationRestrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupOriginConfigurationRestrictions;

CodeartifactPackageGroupOriginConfigurationRestrictions.builder()
//  .externalUpstream(CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream)
//  .internalUpstream(CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream)
//  .publish(CodeartifactPackageGroupOriginConfigurationRestrictionsPublish)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.externalUpstream">externalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | The external upstream restriction determines if new package versions can be ingested or retained from external connections. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.internalUpstream">internalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.publish">publish</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | The publish restriction determines if new package versions can be published. |

---

##### `externalUpstream`<sup>Optional</sup> <a name="externalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.externalUpstream"></a>

```java
public CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream getExternalUpstream();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

The external upstream restriction determines if new package versions can be ingested or retained from external connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#external_upstream CodeartifactPackageGroup#external_upstream}

---

##### `internalUpstream`<sup>Optional</sup> <a name="internalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.internalUpstream"></a>

```java
public CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream getInternalUpstream();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#internal_upstream CodeartifactPackageGroup#internal_upstream}

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.publish"></a>

```java
public CodeartifactPackageGroupOriginConfigurationRestrictionsPublish getPublish();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

The publish restriction determines if new package versions can be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#publish CodeartifactPackageGroup#publish}

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream;

CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.builder()
//  .repositories(java.util.List<java.lang.String>)
//  .restrictionMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.repositories">repositories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.restrictionMode">restrictionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.repositories"></a>

```java
public java.util.List<java.lang.String> getRepositories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `restrictionMode`<sup>Optional</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.restrictionMode"></a>

```java
public java.lang.String getRestrictionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream;

CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.builder()
//  .repositories(java.util.List<java.lang.String>)
//  .restrictionMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.repositories">repositories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.restrictionMode">restrictionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.repositories"></a>

```java
public java.util.List<java.lang.String> getRepositories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `restrictionMode`<sup>Optional</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.restrictionMode"></a>

```java
public java.lang.String getRestrictionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsPublish <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsPublish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish;

CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.builder()
//  .repositories(java.util.List<java.lang.String>)
//  .restrictionMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.repositories">repositories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.restrictionMode">restrictionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.repositories"></a>

```java
public java.util.List<java.lang.String> getRepositories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `restrictionMode`<sup>Optional</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.restrictionMode"></a>

```java
public java.lang.String getRestrictionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupTags <a name="CodeartifactPackageGroupTags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupTags;

CodeartifactPackageGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#key CodeartifactPackageGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeartifact_package_group#value CodeartifactPackageGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodeartifactPackageGroupOriginConfigurationOutputReference <a name="CodeartifactPackageGroupOriginConfigurationOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupOriginConfigurationOutputReference;

new CodeartifactPackageGroupOriginConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions">putRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resetRestrictions">resetRestrictions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRestrictions` <a name="putRestrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions"></a>

```java
public void putRestrictions(CodeartifactPackageGroupOriginConfigurationRestrictions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

---

##### `resetRestrictions` <a name="resetRestrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resetRestrictions"></a>

```java
public void resetRestrictions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictionsInput">restrictionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions"></a>

```java
public CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference getRestrictions();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a>

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictionsInput"></a>

```java
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictions getRestrictionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CodeartifactPackageGroupOriginConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference;

new CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRepositories">resetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRestrictionMode">resetRestrictionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepositories` <a name="resetRepositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRepositories"></a>

```java
public void resetRepositories()
```

##### `resetRestrictionMode` <a name="resetRestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRestrictionMode"></a>

```java
public void resetRestrictionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositoriesInput">repositoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionModeInput">restrictionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories">repositories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode">restrictionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoriesInput`<sup>Optional</sup> <a name="repositoriesInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositoriesInput"></a>

```java
public java.util.List<java.lang.String> getRepositoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictionModeInput`<sup>Optional</sup> <a name="restrictionModeInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionModeInput"></a>

```java
public java.lang.String getRestrictionModeInput();
```

- *Type:* java.lang.String

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories"></a>

```java
public java.util.List<java.lang.String> getRepositories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictionMode`<sup>Required</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode"></a>

```java
public java.lang.String getRestrictionMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue"></a>

```java
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference;

new CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRepositories">resetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRestrictionMode">resetRestrictionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepositories` <a name="resetRepositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRepositories"></a>

```java
public void resetRepositories()
```

##### `resetRestrictionMode` <a name="resetRestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRestrictionMode"></a>

```java
public void resetRestrictionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositoriesInput">repositoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionModeInput">restrictionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories">repositories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode">restrictionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoriesInput`<sup>Optional</sup> <a name="repositoriesInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositoriesInput"></a>

```java
public java.util.List<java.lang.String> getRepositoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictionModeInput`<sup>Optional</sup> <a name="restrictionModeInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionModeInput"></a>

```java
public java.lang.String getRestrictionModeInput();
```

- *Type:* java.lang.String

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories"></a>

```java
public java.util.List<java.lang.String> getRepositories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictionMode`<sup>Required</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode"></a>

```java
public java.lang.String getRestrictionMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue"></a>

```java
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference;

new CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream">putExternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream">putInternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish">putPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetExternalUpstream">resetExternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetInternalUpstream">resetInternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetPublish">resetPublish</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalUpstream` <a name="putExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream"></a>

```java
public void putExternalUpstream(CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---

##### `putInternalUpstream` <a name="putInternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream"></a>

```java
public void putInternalUpstream(CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---

##### `putPublish` <a name="putPublish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish"></a>

```java
public void putPublish(CodeartifactPackageGroupOriginConfigurationRestrictionsPublish value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---

##### `resetExternalUpstream` <a name="resetExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetExternalUpstream"></a>

```java
public void resetExternalUpstream()
```

##### `resetInternalUpstream` <a name="resetInternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetInternalUpstream"></a>

```java
public void resetInternalUpstream()
```

##### `resetPublish` <a name="resetPublish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetPublish"></a>

```java
public void resetPublish()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream">externalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream">internalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish">publish</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstreamInput">externalUpstreamInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstreamInput">internalUpstreamInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publishInput">publishInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalUpstream`<sup>Required</sup> <a name="externalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream"></a>

```java
public CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference getExternalUpstream();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a>

---

##### `internalUpstream`<sup>Required</sup> <a name="internalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream"></a>

```java
public CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference getInternalUpstream();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a>

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish"></a>

```java
public CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference getPublish();
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a>

---

##### `externalUpstreamInput`<sup>Optional</sup> <a name="externalUpstreamInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstreamInput"></a>

```java
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream getExternalUpstreamInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---

##### `internalUpstreamInput`<sup>Optional</sup> <a name="internalUpstreamInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstreamInput"></a>

```java
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream getInternalUpstreamInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---

##### `publishInput`<sup>Optional</sup> <a name="publishInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publishInput"></a>

```java
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsPublish getPublishInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference;

new CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRepositories">resetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRestrictionMode">resetRestrictionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepositories` <a name="resetRepositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRepositories"></a>

```java
public void resetRepositories()
```

##### `resetRestrictionMode` <a name="resetRestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRestrictionMode"></a>

```java
public void resetRestrictionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositoriesInput">repositoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionModeInput">restrictionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories">repositories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode">restrictionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoriesInput`<sup>Optional</sup> <a name="repositoriesInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositoriesInput"></a>

```java
public java.util.List<java.lang.String> getRepositoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictionModeInput`<sup>Optional</sup> <a name="restrictionModeInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionModeInput"></a>

```java
public java.lang.String getRestrictionModeInput();
```

- *Type:* java.lang.String

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories"></a>

```java
public java.util.List<java.lang.String> getRepositories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictionMode`<sup>Required</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode"></a>

```java
public java.lang.String getRestrictionMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue"></a>

```java
public IResolvable|CodeartifactPackageGroupOriginConfigurationRestrictionsPublish getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---


### CodeartifactPackageGroupTagsList <a name="CodeartifactPackageGroupTagsList" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupTagsList;

new CodeartifactPackageGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get"></a>

```java
public CodeartifactPackageGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CodeartifactPackageGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>>

---


### CodeartifactPackageGroupTagsOutputReference <a name="CodeartifactPackageGroupTagsOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codeartifact_package_group.CodeartifactPackageGroupTagsOutputReference;

new CodeartifactPackageGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CodeartifactPackageGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>

---



