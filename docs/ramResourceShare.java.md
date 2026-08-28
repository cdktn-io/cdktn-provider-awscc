# `ramResourceShare` Submodule <a name="`ramResourceShare` Submodule" id="@cdktn/provider-awscc.ramResourceShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RamResourceShare <a name="RamResourceShare" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share awscc_ram_resource_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer"></a>

```java
import io.cdktn.providers.awscc.ram_resource_share.RamResourceShare;

RamResourceShare.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowExternalPrincipals(java.lang.Boolean|IResolvable)
//  .permissionArns(java.util.List<java.lang.String>)
//  .principals(java.util.List<java.lang.String>)
//  .resourceArns(java.util.List<java.lang.String>)
//  .resourceShareConfiguration(RamResourceShareResourceShareConfiguration)
//  .sources(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<RamResourceShareTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.permissionArns">permissionArns</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the principals to associate with the resource share. The possible values are:. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | Specifies a list of one or more ARNs of the resources to associate with the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.resourceShareConfiguration">resourceShareConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | Specifies the configuration for the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.sources">sources</a></code> | <code>java.util.List<java.lang.String></code> | Specifies from which source accounts the service principal has access to the resources in this resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>></code> | Specifies one or more tags to attach to the resource share itself. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#name RamResourceShare#name}

---

##### `allowExternalPrincipals`<sup>Optional</sup> <a name="allowExternalPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.allowExternalPrincipals"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share.

A value of `true` lets you share with individual AWS accounts that are not in your organization. A value of `false` only has meaning if your account is a member of an AWS Organization. The default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#allow_external_principals RamResourceShare#allow_external_principals}

---

##### `permissionArns`<sup>Optional</sup> <a name="permissionArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.permissionArns"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#permission_arns RamResourceShare#permission_arns}

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.principals"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the principals to associate with the resource share. The possible values are:.

* An AWS account ID
* An Amazon Resource Name (ARN) of an organization in AWS Organizations
* An ARN of an organizational unit (OU) in AWS Organizations
* An ARN of an IAM role
* An ARN of an IAM user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#principals RamResourceShare#principals}

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.resourceArns"></a>

- *Type:* java.util.List<java.lang.String>

Specifies a list of one or more ARNs of the resources to associate with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#resource_arns RamResourceShare#resource_arns}

---

##### `resourceShareConfiguration`<sup>Optional</sup> <a name="resourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.resourceShareConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

Specifies the configuration for the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#resource_share_configuration RamResourceShare#resource_share_configuration}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.sources"></a>

- *Type:* java.util.List<java.lang.String>

Specifies from which source accounts the service principal has access to the resources in this resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#sources RamResourceShare#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>>

Specifies one or more tags to attach to the resource share itself.

It doesn't attach the tags to the resources associated with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#tags RamResourceShare#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration">putResourceShareConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetAllowExternalPrincipals">resetAllowExternalPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPermissionArns">resetPermissionArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPrincipals">resetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceArns">resetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceShareConfiguration">resetResourceShareConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetSources">resetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceShareConfiguration` <a name="putResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration"></a>

```java
public void putResourceShareConfiguration(RamResourceShareResourceShareConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RamResourceShareTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>>

---

##### `resetAllowExternalPrincipals` <a name="resetAllowExternalPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetAllowExternalPrincipals"></a>

```java
public void resetAllowExternalPrincipals()
```

##### `resetPermissionArns` <a name="resetPermissionArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPermissionArns"></a>

```java
public void resetPermissionArns()
```

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPrincipals"></a>

```java
public void resetPrincipals()
```

##### `resetResourceArns` <a name="resetResourceArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceArns"></a>

```java
public void resetResourceArns()
```

##### `resetResourceShareConfiguration` <a name="resetResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceShareConfiguration"></a>

```java
public void resetResourceShareConfiguration()
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetSources"></a>

```java
public void resetSources()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RamResourceShare resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ram_resource_share.RamResourceShare;

RamResourceShare.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ram_resource_share.RamResourceShare;

RamResourceShare.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ram_resource_share.RamResourceShare;

RamResourceShare.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ram_resource_share.RamResourceShare;

RamResourceShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RamResourceShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RamResourceShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RamResourceShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RamResourceShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RamResourceShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.featureSet">featureSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.owningAccountId">owningAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfiguration">resourceShareConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference">RamResourceShareResourceShareConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList">RamResourceShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipalsInput">allowExternalPrincipalsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArnsInput">permissionArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principalsInput">principalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArnsInput">resourceArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfigurationInput">resourceShareConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sourcesInput">sourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArns">permissionArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sources">sources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `featureSet`<sup>Required</sup> <a name="featureSet" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.featureSet"></a>

```java
public java.lang.String getFeatureSet();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `owningAccountId`<sup>Required</sup> <a name="owningAccountId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.owningAccountId"></a>

```java
public java.lang.String getOwningAccountId();
```

- *Type:* java.lang.String

---

##### `resourceShareConfiguration`<sup>Required</sup> <a name="resourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfiguration"></a>

```java
public RamResourceShareResourceShareConfigurationOutputReference getResourceShareConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference">RamResourceShareResourceShareConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tags"></a>

```java
public RamResourceShareTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList">RamResourceShareTagsList</a>

---

##### `allowExternalPrincipalsInput`<sup>Optional</sup> <a name="allowExternalPrincipalsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipalsInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowExternalPrincipalsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionArnsInput`<sup>Optional</sup> <a name="permissionArnsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArnsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principalsInput"></a>

```java
public java.util.List<java.lang.String> getPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArnsInput"></a>

```java
public java.util.List<java.lang.String> getResourceArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceShareConfigurationInput`<sup>Optional</sup> <a name="resourceShareConfigurationInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfigurationInput"></a>

```java
public IResolvable|RamResourceShareResourceShareConfiguration getResourceShareConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sourcesInput"></a>

```java
public java.util.List<java.lang.String> getSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RamResourceShareTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>>

---

##### `allowExternalPrincipals`<sup>Required</sup> <a name="allowExternalPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipals"></a>

```java
public java.lang.Boolean|IResolvable getAllowExternalPrincipals();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `permissionArns`<sup>Required</sup> <a name="permissionArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArns"></a>

```java
public java.util.List<java.lang.String> getPermissionArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sources"></a>

```java
public java.util.List<java.lang.String> getSources();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RamResourceShareConfig <a name="RamResourceShareConfig" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ram_resource_share.RamResourceShareConfig;

RamResourceShareConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowExternalPrincipals(java.lang.Boolean|IResolvable)
//  .permissionArns(java.util.List<java.lang.String>)
//  .principals(java.util.List<java.lang.String>)
//  .resourceArns(java.util.List<java.lang.String>)
//  .resourceShareConfiguration(RamResourceShareResourceShareConfiguration)
//  .sources(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<RamResourceShareTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.permissionArns">permissionArns</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the principals to associate with the resource share. The possible values are:. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | Specifies a list of one or more ARNs of the resources to associate with the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceShareConfiguration">resourceShareConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | Specifies the configuration for the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.sources">sources</a></code> | <code>java.util.List<java.lang.String></code> | Specifies from which source accounts the service principal has access to the resources in this resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>></code> | Specifies one or more tags to attach to the resource share itself. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#name RamResourceShare#name}

---

##### `allowExternalPrincipals`<sup>Optional</sup> <a name="allowExternalPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.allowExternalPrincipals"></a>

```java
public java.lang.Boolean|IResolvable getAllowExternalPrincipals();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share.

A value of `true` lets you share with individual AWS accounts that are not in your organization. A value of `false` only has meaning if your account is a member of an AWS Organization. The default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#allow_external_principals RamResourceShare#allow_external_principals}

---

##### `permissionArns`<sup>Optional</sup> <a name="permissionArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.permissionArns"></a>

```java
public java.util.List<java.lang.String> getPermissionArns();
```

- *Type:* java.util.List<java.lang.String>

Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#permission_arns RamResourceShare#permission_arns}

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

Specifies the principals to associate with the resource share. The possible values are:.

* An AWS account ID
* An Amazon Resource Name (ARN) of an organization in AWS Organizations
* An ARN of an organizational unit (OU) in AWS Organizations
* An ARN of an IAM role
* An ARN of an IAM user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#principals RamResourceShare#principals}

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

Specifies a list of one or more ARNs of the resources to associate with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#resource_arns RamResourceShare#resource_arns}

---

##### `resourceShareConfiguration`<sup>Optional</sup> <a name="resourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceShareConfiguration"></a>

```java
public RamResourceShareResourceShareConfiguration getResourceShareConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

Specifies the configuration for the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#resource_share_configuration RamResourceShare#resource_share_configuration}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.sources"></a>

```java
public java.util.List<java.lang.String> getSources();
```

- *Type:* java.util.List<java.lang.String>

Specifies from which source accounts the service principal has access to the resources in this resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#sources RamResourceShare#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RamResourceShareTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>>

Specifies one or more tags to attach to the resource share itself.

It doesn't attach the tags to the resources associated with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#tags RamResourceShare#tags}

---

### RamResourceShareResourceShareConfiguration <a name="RamResourceShareResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ram_resource_share.RamResourceShareResourceShareConfiguration;

RamResourceShareResourceShareConfiguration.builder()
//  .exclusiveAccountAccess(java.lang.Boolean|IResolvable)
//  .retainSharingOnAccountLeaveOrganization(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.exclusiveAccountAccess">exclusiveAccountAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The resource share restricts access to an account. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.retainSharingOnAccountLeaveOrganization">retainSharingOnAccountLeaveOrganization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the consumer account retains access to the resource share after leaving the organization. |

---

##### `exclusiveAccountAccess`<sup>Optional</sup> <a name="exclusiveAccountAccess" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.exclusiveAccountAccess"></a>

```java
public java.lang.Boolean|IResolvable getExclusiveAccountAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The resource share restricts access to an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#exclusive_account_access RamResourceShare#exclusive_account_access}

---

##### `retainSharingOnAccountLeaveOrganization`<sup>Optional</sup> <a name="retainSharingOnAccountLeaveOrganization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.retainSharingOnAccountLeaveOrganization"></a>

```java
public java.lang.Boolean|IResolvable getRetainSharingOnAccountLeaveOrganization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the consumer account retains access to the resource share after leaving the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#retain_sharing_on_account_leave_organization RamResourceShare#retain_sharing_on_account_leave_organization}

---

### RamResourceShareTags <a name="RamResourceShareTags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ram_resource_share.RamResourceShareTags;

RamResourceShareTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#key RamResourceShare#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ram_resource_share#value RamResourceShare#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RamResourceShareResourceShareConfigurationOutputReference <a name="RamResourceShareResourceShareConfigurationOutputReference" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ram_resource_share.RamResourceShareResourceShareConfigurationOutputReference;

new RamResourceShareResourceShareConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetExclusiveAccountAccess">resetExclusiveAccountAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetRetainSharingOnAccountLeaveOrganization">resetRetainSharingOnAccountLeaveOrganization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusiveAccountAccess` <a name="resetExclusiveAccountAccess" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetExclusiveAccountAccess"></a>

```java
public void resetExclusiveAccountAccess()
```

##### `resetRetainSharingOnAccountLeaveOrganization` <a name="resetRetainSharingOnAccountLeaveOrganization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetRetainSharingOnAccountLeaveOrganization"></a>

```java
public void resetRetainSharingOnAccountLeaveOrganization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccessInput">exclusiveAccountAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganizationInput">retainSharingOnAccountLeaveOrganizationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccess">exclusiveAccountAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganization">retainSharingOnAccountLeaveOrganization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusiveAccountAccessInput`<sup>Optional</sup> <a name="exclusiveAccountAccessInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getExclusiveAccountAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retainSharingOnAccountLeaveOrganizationInput`<sup>Optional</sup> <a name="retainSharingOnAccountLeaveOrganizationInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganizationInput"></a>

```java
public java.lang.Boolean|IResolvable getRetainSharingOnAccountLeaveOrganizationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exclusiveAccountAccess`<sup>Required</sup> <a name="exclusiveAccountAccess" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccess"></a>

```java
public java.lang.Boolean|IResolvable getExclusiveAccountAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retainSharingOnAccountLeaveOrganization`<sup>Required</sup> <a name="retainSharingOnAccountLeaveOrganization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganization"></a>

```java
public java.lang.Boolean|IResolvable getRetainSharingOnAccountLeaveOrganization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|RamResourceShareResourceShareConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

---


### RamResourceShareTagsList <a name="RamResourceShareTagsList" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ram_resource_share.RamResourceShareTagsList;

new RamResourceShareTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get"></a>

```java
public RamResourceShareTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RamResourceShareTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>>

---


### RamResourceShareTagsOutputReference <a name="RamResourceShareTagsOutputReference" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ram_resource_share.RamResourceShareTagsOutputReference;

new RamResourceShareTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RamResourceShareTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>

---



