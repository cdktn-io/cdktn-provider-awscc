# `mediapackagev2OriginEndpointPolicy` Submodule <a name="`mediapackagev2OriginEndpointPolicy` Submodule" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mediapackagev2OriginEndpointPolicy <a name="Mediapackagev2OriginEndpointPolicy" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy awscc_mediapackagev2_origin_endpoint_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_origin_endpoint_policy.Mediapackagev2OriginEndpointPolicy;

Mediapackagev2OriginEndpointPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelGroupName(java.lang.String)
    .channelName(java.lang.String)
    .originEndpointName(java.lang.String)
    .policy(java.lang.String)
//  .cdnAuthConfiguration(Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.channelGroupName">channelGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_group_name Mediapackagev2OriginEndpointPolicy#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_name Mediapackagev2OriginEndpointPolicy#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.originEndpointName">originEndpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#origin_endpoint_name Mediapackagev2OriginEndpointPolicy#origin_endpoint_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#policy Mediapackagev2OriginEndpointPolicy#policy}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.cdnAuthConfiguration">cdnAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | <p>The settings to enable CDN authorization headers in MediaPackage.</p>. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.channelGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_group_name Mediapackagev2OriginEndpointPolicy#channel_group_name}.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_name Mediapackagev2OriginEndpointPolicy#channel_name}.

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.originEndpointName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#origin_endpoint_name Mediapackagev2OriginEndpointPolicy#origin_endpoint_name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#policy Mediapackagev2OriginEndpointPolicy#policy}.

---

##### `cdnAuthConfiguration`<sup>Optional</sup> <a name="cdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.cdnAuthConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

<p>The settings to enable CDN authorization headers in MediaPackage.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#cdn_auth_configuration Mediapackagev2OriginEndpointPolicy#cdn_auth_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.putCdnAuthConfiguration">putCdnAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetCdnAuthConfiguration">resetCdnAuthConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCdnAuthConfiguration` <a name="putCdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.putCdnAuthConfiguration"></a>

```java
public void putCdnAuthConfiguration(Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.putCdnAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

---

##### `resetCdnAuthConfiguration` <a name="resetCdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetCdnAuthConfiguration"></a>

```java
public void resetCdnAuthConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Mediapackagev2OriginEndpointPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_origin_endpoint_policy.Mediapackagev2OriginEndpointPolicy;

Mediapackagev2OriginEndpointPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_origin_endpoint_policy.Mediapackagev2OriginEndpointPolicy;

Mediapackagev2OriginEndpointPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_origin_endpoint_policy.Mediapackagev2OriginEndpointPolicy;

Mediapackagev2OriginEndpointPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_origin_endpoint_policy.Mediapackagev2OriginEndpointPolicy;

Mediapackagev2OriginEndpointPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Mediapackagev2OriginEndpointPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Mediapackagev2OriginEndpointPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Mediapackagev2OriginEndpointPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Mediapackagev2OriginEndpointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Mediapackagev2OriginEndpointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfiguration">cdnAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference">Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfigurationInput">cdnAuthConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupNameInput">channelGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointNameInput">originEndpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupName">channelGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointName">originEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cdnAuthConfiguration`<sup>Required</sup> <a name="cdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfiguration"></a>

```java
public Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference getCdnAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference">Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `cdnAuthConfigurationInput`<sup>Optional</sup> <a name="cdnAuthConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfigurationInput"></a>

```java
public IResolvable|Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration getCdnAuthConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

---

##### `channelGroupNameInput`<sup>Optional</sup> <a name="channelGroupNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupNameInput"></a>

```java
public java.lang.String getChannelGroupNameInput();
```

- *Type:* java.lang.String

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `originEndpointNameInput`<sup>Optional</sup> <a name="originEndpointNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointNameInput"></a>

```java
public java.lang.String getOriginEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupName"></a>

```java
public java.lang.String getChannelGroupName();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointName"></a>

```java
public java.lang.String getOriginEndpointName();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration <a name="Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_origin_endpoint_policy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration;

Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.builder()
//  .cdnIdentifierSecretArns(java.util.List<java.lang.String>)
//  .secretsRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.cdnIdentifierSecretArns">cdnIdentifierSecretArns</a></code> | <code>java.util.List<java.lang.String></code> | <p>The ARN for the secret in Secrets Manager that your CDN uses for authorization to access the endpoint.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.secretsRoleArn">secretsRoleArn</a></code> | <code>java.lang.String</code> | <p>The ARN for the IAM role that gives MediaPackage read access to Secrets Manager and KMS for CDN authorization.</p>. |

---

##### `cdnIdentifierSecretArns`<sup>Optional</sup> <a name="cdnIdentifierSecretArns" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.cdnIdentifierSecretArns"></a>

```java
public java.util.List<java.lang.String> getCdnIdentifierSecretArns();
```

- *Type:* java.util.List<java.lang.String>

<p>The ARN for the secret in Secrets Manager that your CDN uses for authorization to access the endpoint.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#cdn_identifier_secret_arns Mediapackagev2OriginEndpointPolicy#cdn_identifier_secret_arns}

---

##### `secretsRoleArn`<sup>Optional</sup> <a name="secretsRoleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.secretsRoleArn"></a>

```java
public java.lang.String getSecretsRoleArn();
```

- *Type:* java.lang.String

<p>The ARN for the IAM role that gives MediaPackage read access to Secrets Manager and KMS for CDN authorization.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#secrets_role_arn Mediapackagev2OriginEndpointPolicy#secrets_role_arn}

---

### Mediapackagev2OriginEndpointPolicyConfig <a name="Mediapackagev2OriginEndpointPolicyConfig" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_origin_endpoint_policy.Mediapackagev2OriginEndpointPolicyConfig;

Mediapackagev2OriginEndpointPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelGroupName(java.lang.String)
    .channelName(java.lang.String)
    .originEndpointName(java.lang.String)
    .policy(java.lang.String)
//  .cdnAuthConfiguration(Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelGroupName">channelGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_group_name Mediapackagev2OriginEndpointPolicy#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_name Mediapackagev2OriginEndpointPolicy#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.originEndpointName">originEndpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#origin_endpoint_name Mediapackagev2OriginEndpointPolicy#origin_endpoint_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#policy Mediapackagev2OriginEndpointPolicy#policy}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.cdnAuthConfiguration">cdnAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | <p>The settings to enable CDN authorization headers in MediaPackage.</p>. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelGroupName"></a>

```java
public java.lang.String getChannelGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_group_name Mediapackagev2OriginEndpointPolicy#channel_group_name}.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_name Mediapackagev2OriginEndpointPolicy#channel_name}.

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.originEndpointName"></a>

```java
public java.lang.String getOriginEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#origin_endpoint_name Mediapackagev2OriginEndpointPolicy#origin_endpoint_name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#policy Mediapackagev2OriginEndpointPolicy#policy}.

---

##### `cdnAuthConfiguration`<sup>Optional</sup> <a name="cdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.cdnAuthConfiguration"></a>

```java
public Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration getCdnAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

<p>The settings to enable CDN authorization headers in MediaPackage.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint_policy#cdn_auth_configuration Mediapackagev2OriginEndpointPolicy#cdn_auth_configuration}

---

## Classes <a name="Classes" id="Classes"></a>

### Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference <a name="Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_origin_endpoint_policy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference;

new Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetCdnIdentifierSecretArns">resetCdnIdentifierSecretArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetSecretsRoleArn">resetSecretsRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCdnIdentifierSecretArns` <a name="resetCdnIdentifierSecretArns" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetCdnIdentifierSecretArns"></a>

```java
public void resetCdnIdentifierSecretArns()
```

##### `resetSecretsRoleArn` <a name="resetSecretsRoleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetSecretsRoleArn"></a>

```java
public void resetSecretsRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArnsInput">cdnIdentifierSecretArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArnInput">secretsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArns">cdnIdentifierSecretArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArn">secretsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cdnIdentifierSecretArnsInput`<sup>Optional</sup> <a name="cdnIdentifierSecretArnsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArnsInput"></a>

```java
public java.util.List<java.lang.String> getCdnIdentifierSecretArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretsRoleArnInput`<sup>Optional</sup> <a name="secretsRoleArnInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArnInput"></a>

```java
public java.lang.String getSecretsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `cdnIdentifierSecretArns`<sup>Required</sup> <a name="cdnIdentifierSecretArns" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArns"></a>

```java
public java.util.List<java.lang.String> getCdnIdentifierSecretArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretsRoleArn`<sup>Required</sup> <a name="secretsRoleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArn"></a>

```java
public java.lang.String getSecretsRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

---



