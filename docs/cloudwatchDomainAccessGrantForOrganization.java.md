# `cloudwatchDomainAccessGrantForOrganization` Submodule <a name="`cloudwatchDomainAccessGrantForOrganization` Submodule" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchDomainAccessGrantForOrganization <a name="CloudwatchDomainAccessGrantForOrganization" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization awscc_cloudwatch_domain_access_grant_for_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganization;

CloudwatchDomainAccessGrantForOrganization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainId(java.lang.String)
    .name(java.lang.String)
    .permission(java.lang.String)
    .principal(CloudwatchDomainAccessGrantForOrganizationPrincipal)
//  .tags(IResolvable|java.util.List<CloudwatchDomainAccessGrantForOrganizationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | The unique identifier of the organization domain the grant applies to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the grant. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.permission">permission</a></code> | <code>java.lang.String</code> | The permission level the grant confers. Organization grants are administrative only. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | The principal the grant is issued to. Supply PrincipalId, or PrincipalAttributes for an attribute-based grant. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

The unique identifier of the organization domain the grant applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#domain_id CloudwatchDomainAccessGrantForOrganization#domain_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#name CloudwatchDomainAccessGrantForOrganization#name}

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.permission"></a>

- *Type:* java.lang.String

The permission level the grant confers. Organization grants are administrative only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#permission CloudwatchDomainAccessGrantForOrganization#permission}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.principal"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

The principal the grant is issued to. Supply PrincipalId, or PrincipalAttributes for an attribute-based grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal CloudwatchDomainAccessGrantForOrganization#principal}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#tags CloudwatchDomainAccessGrantForOrganization#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal"></a>

```java
public void putPrincipal(CloudwatchDomainAccessGrantForOrganizationPrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudwatchDomainAccessGrantForOrganizationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganization;

CloudwatchDomainAccessGrantForOrganization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganization;

CloudwatchDomainAccessGrantForOrganization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganization;

CloudwatchDomainAccessGrantForOrganization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganization;

CloudwatchDomainAccessGrantForOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchDomainAccessGrantForOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchDomainAccessGrantForOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchDomainAccessGrantForOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchDomainAccessGrantForOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantId">grantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantType">grantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList">CloudwatchDomainAccessGrantForOrganizationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principalInput">principalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantId"></a>

```java
public java.lang.String getGrantId();
```

- *Type:* java.lang.String

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantType"></a>

```java
public java.lang.String getGrantType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principal"></a>

```java
public CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tags"></a>

```java
public CloudwatchDomainAccessGrantForOrganizationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList">CloudwatchDomainAccessGrantForOrganizationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principalInput"></a>

```java
public IResolvable|CloudwatchDomainAccessGrantForOrganizationPrincipal getPrincipalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchDomainAccessGrantForOrganizationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchDomainAccessGrantForOrganizationConfig <a name="CloudwatchDomainAccessGrantForOrganizationConfig" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganizationConfig;

CloudwatchDomainAccessGrantForOrganizationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainId(java.lang.String)
    .name(java.lang.String)
    .permission(java.lang.String)
    .principal(CloudwatchDomainAccessGrantForOrganizationPrincipal)
//  .tags(IResolvable|java.util.List<CloudwatchDomainAccessGrantForOrganizationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | The unique identifier of the organization domain the grant applies to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the grant. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.permission">permission</a></code> | <code>java.lang.String</code> | The permission level the grant confers. Organization grants are administrative only. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | The principal the grant is issued to. Supply PrincipalId, or PrincipalAttributes for an attribute-based grant. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

The unique identifier of the organization domain the grant applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#domain_id CloudwatchDomainAccessGrantForOrganization#domain_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#name CloudwatchDomainAccessGrantForOrganization#name}

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

The permission level the grant confers. Organization grants are administrative only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#permission CloudwatchDomainAccessGrantForOrganization#permission}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.principal"></a>

```java
public CloudwatchDomainAccessGrantForOrganizationPrincipal getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

The principal the grant is issued to. Supply PrincipalId, or PrincipalAttributes for an attribute-based grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal CloudwatchDomainAccessGrantForOrganization#principal}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudwatchDomainAccessGrantForOrganizationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#tags CloudwatchDomainAccessGrantForOrganization#tags}

---

### CloudwatchDomainAccessGrantForOrganizationPrincipal <a name="CloudwatchDomainAccessGrantForOrganizationPrincipal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganizationPrincipal;

CloudwatchDomainAccessGrantForOrganizationPrincipal.builder()
    .principalType(java.lang.String)
//  .principalAttributes(IResolvable|java.util.List<CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes>)
//  .principalId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalType">principalType</a></code> | <code>java.lang.String</code> | The type of principal the grant is issued to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalAttributes">principalAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>></code> | Attribute key-value pairs that select the principals the grant applies to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalId">principalId</a></code> | <code>java.lang.String</code> | The identifier of the principal, such as an IAM role ARN or an Identity Center user ID. |

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

The type of principal the grant is issued to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_type CloudwatchDomainAccessGrantForOrganization#principal_type}

---

##### `principalAttributes`<sup>Optional</sup> <a name="principalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalAttributes"></a>

```java
public IResolvable|java.util.List<CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes> getPrincipalAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>>

Attribute key-value pairs that select the principals the grant applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_attributes CloudwatchDomainAccessGrantForOrganization#principal_attributes}

---

##### `principalId`<sup>Optional</sup> <a name="principalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

The identifier of the principal, such as an IAM role ARN or an Identity Center user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_id CloudwatchDomainAccessGrantForOrganization#principal_id}

---

### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes;

CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.key">key</a></code> | <code>java.lang.String</code> | The attribute name. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.value">value</a></code> | <code>java.lang.String</code> | The attribute value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The attribute name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#key CloudwatchDomainAccessGrantForOrganization#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#value CloudwatchDomainAccessGrantForOrganization#value}

---

### CloudwatchDomainAccessGrantForOrganizationTags <a name="CloudwatchDomainAccessGrantForOrganizationTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganizationTags;

CloudwatchDomainAccessGrantForOrganizationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#key CloudwatchDomainAccessGrantForOrganization#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#value CloudwatchDomainAccessGrantForOrganization#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference;

new CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes">putPrincipalAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalAttributes">resetPrincipalAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalId">resetPrincipalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipalAttributes` <a name="putPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes"></a>

```java
public void putPrincipalAttributes(IResolvable|java.util.List<CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>>

---

##### `resetPrincipalAttributes` <a name="resetPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalAttributes"></a>

```java
public void resetPrincipalAttributes()
```

##### `resetPrincipalId` <a name="resetPrincipalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalId"></a>

```java
public void resetPrincipalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes">principalAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributesInput">principalAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalAttributes`<sup>Required</sup> <a name="principalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes"></a>

```java
public CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList getPrincipalAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a>

---

##### `principalAttributesInput`<sup>Optional</sup> <a name="principalAttributesInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributesInput"></a>

```java
public IResolvable|java.util.List<CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes> getPrincipalAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>>

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchDomainAccessGrantForOrganizationPrincipal getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---


### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList;

new CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get"></a>

```java
public CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>>

---


### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference;

new CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>

---


### CloudwatchDomainAccessGrantForOrganizationTagsList <a name="CloudwatchDomainAccessGrantForOrganizationTagsList" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganizationTagsList;

new CloudwatchDomainAccessGrantForOrganizationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get"></a>

```java
public CloudwatchDomainAccessGrantForOrganizationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchDomainAccessGrantForOrganizationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>>

---


### CloudwatchDomainAccessGrantForOrganizationTagsOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_domain_access_grant_for_organization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference;

new CloudwatchDomainAccessGrantForOrganizationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchDomainAccessGrantForOrganizationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>

---



