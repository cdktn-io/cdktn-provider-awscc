# `route53ProfilesProfileResourceAssociation` Submodule <a name="`route53ProfilesProfileResourceAssociation` Submodule" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ProfilesProfileResourceAssociation <a name="Route53ProfilesProfileResourceAssociation" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association awscc_route53profiles_profile_resource_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_profiles_profile_resource_association.Route53ProfilesProfileResourceAssociation;

Route53ProfilesProfileResourceAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .profileId(java.lang.String)
    .resourceArn(java.lang.String)
//  .resourceProperties(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of an association between the  Profile and resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.profileId">profileId</a></code> | <code>java.lang.String</code> | The ID of the  profile that you associated the resource to that is specified by ResourceArn. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The arn of the resource that you associated to the  Profile. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.resourceProperties">resourceProperties</a></code> | <code>java.lang.String</code> | A JSON-formatted string with key-value pairs specifying the properties of the associated resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of an association between the  Profile and resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#name Route53ProfilesProfileResourceAssociation#name}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.profileId"></a>

- *Type:* java.lang.String

The ID of the  profile that you associated the resource to that is specified by ResourceArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#profile_id Route53ProfilesProfileResourceAssociation#profile_id}

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.resourceArn"></a>

- *Type:* java.lang.String

The arn of the resource that you associated to the  Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#resource_arn Route53ProfilesProfileResourceAssociation#resource_arn}

---

##### `resourceProperties`<sup>Optional</sup> <a name="resourceProperties" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.resourceProperties"></a>

- *Type:* java.lang.String

A JSON-formatted string with key-value pairs specifying the properties of the associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#resource_properties Route53ProfilesProfileResourceAssociation#resource_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetResourceProperties">resetResourceProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetResourceProperties` <a name="resetResourceProperties" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetResourceProperties"></a>

```java
public void resetResourceProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ProfilesProfileResourceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_profiles_profile_resource_association.Route53ProfilesProfileResourceAssociation;

Route53ProfilesProfileResourceAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_profiles_profile_resource_association.Route53ProfilesProfileResourceAssociation;

Route53ProfilesProfileResourceAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_profiles_profile_resource_association.Route53ProfilesProfileResourceAssociation;

Route53ProfilesProfileResourceAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_profiles_profile_resource_association.Route53ProfilesProfileResourceAssociation;

Route53ProfilesProfileResourceAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53ProfilesProfileResourceAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53ProfilesProfileResourceAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53ProfilesProfileResourceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53ProfilesProfileResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53ProfilesProfileResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileResourceAssociationId">profileResourceAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourcePropertiesInput">resourcePropertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceProperties">resourceProperties</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `profileResourceAssociationId`<sup>Required</sup> <a name="profileResourceAssociationId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileResourceAssociationId"></a>

```java
public java.lang.String getProfileResourceAssociationId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `resourcePropertiesInput`<sup>Optional</sup> <a name="resourcePropertiesInput" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourcePropertiesInput"></a>

```java
public java.lang.String getResourcePropertiesInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `resourceProperties`<sup>Required</sup> <a name="resourceProperties" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceProperties"></a>

```java
public java.lang.String getResourceProperties();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ProfilesProfileResourceAssociationConfig <a name="Route53ProfilesProfileResourceAssociationConfig" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_profiles_profile_resource_association.Route53ProfilesProfileResourceAssociationConfig;

Route53ProfilesProfileResourceAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .profileId(java.lang.String)
    .resourceArn(java.lang.String)
//  .resourceProperties(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of an association between the  Profile and resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.profileId">profileId</a></code> | <code>java.lang.String</code> | The ID of the  profile that you associated the resource to that is specified by ResourceArn. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The arn of the resource that you associated to the  Profile. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceProperties">resourceProperties</a></code> | <code>java.lang.String</code> | A JSON-formatted string with key-value pairs specifying the properties of the associated resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of an association between the  Profile and resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#name Route53ProfilesProfileResourceAssociation#name}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

The ID of the  profile that you associated the resource to that is specified by ResourceArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#profile_id Route53ProfilesProfileResourceAssociation#profile_id}

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

The arn of the resource that you associated to the  Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#resource_arn Route53ProfilesProfileResourceAssociation#resource_arn}

---

##### `resourceProperties`<sup>Optional</sup> <a name="resourceProperties" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceProperties"></a>

```java
public java.lang.String getResourceProperties();
```

- *Type:* java.lang.String

A JSON-formatted string with key-value pairs specifying the properties of the associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#resource_properties Route53ProfilesProfileResourceAssociation#resource_properties}

---



