# `appsyncChannelNamespace` Submodule <a name="`appsyncChannelNamespace` Submodule" id="@cdktn/provider-awscc.appsyncChannelNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncChannelNamespace <a name="AppsyncChannelNamespace" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace awscc_appsync_channel_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespace;

AppsyncChannelNamespace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .name(java.lang.String)
//  .codeHandlers(java.lang.String)
//  .codeS3Location(java.lang.String)
//  .handlerConfigs(AppsyncChannelNamespaceHandlerConfigs)
//  .publishAuthModes(IResolvable|java.util.List<AppsyncChannelNamespacePublishAuthModes>)
//  .subscribeAuthModes(IResolvable|java.util.List<AppsyncChannelNamespaceSubscribeAuthModes>)
//  .tags(IResolvable|java.util.List<AppsyncChannelNamespaceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | AppSync Api Id that this Channel Namespace belongs to. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Namespace indentifier. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.codeHandlers">codeHandlers</a></code> | <code>java.lang.String</code> | String of APPSYNC_JS code to be used by the handlers. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.codeS3Location">codeS3Location</a></code> | <code>java.lang.String</code> | The Amazon S3 endpoint where the code is located. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.handlerConfigs">handlerConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.publishAuthModes">publishAuthModes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>></code> | List of AuthModes supported for Publish operations. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.subscribeAuthModes">subscribeAuthModes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>></code> | List of AuthModes supported for Subscribe operations. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>></code> | An arbitrary set of tags (key-value pairs) for this AppSync API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

AppSync Api Id that this Channel Namespace belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#api_id AppsyncChannelNamespace#api_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Namespace indentifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#name AppsyncChannelNamespace#name}

---

##### `codeHandlers`<sup>Optional</sup> <a name="codeHandlers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.codeHandlers"></a>

- *Type:* java.lang.String

String of APPSYNC_JS code to be used by the handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#code_handlers AppsyncChannelNamespace#code_handlers}

---

##### `codeS3Location`<sup>Optional</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.codeS3Location"></a>

- *Type:* java.lang.String

The Amazon S3 endpoint where the code is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#code_s3_location AppsyncChannelNamespace#code_s3_location}

---

##### `handlerConfigs`<sup>Optional</sup> <a name="handlerConfigs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.handlerConfigs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}.

---

##### `publishAuthModes`<sup>Optional</sup> <a name="publishAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.publishAuthModes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>>

List of AuthModes supported for Publish operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#publish_auth_modes AppsyncChannelNamespace#publish_auth_modes}

---

##### `subscribeAuthModes`<sup>Optional</sup> <a name="subscribeAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.subscribeAuthModes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>>

List of AuthModes supported for Subscribe operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#subscribe_auth_modes AppsyncChannelNamespace#subscribe_auth_modes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>>

An arbitrary set of tags (key-value pairs) for this AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#tags AppsyncChannelNamespace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putHandlerConfigs">putHandlerConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putPublishAuthModes">putPublishAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putSubscribeAuthModes">putSubscribeAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetCodeHandlers">resetCodeHandlers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetCodeS3Location">resetCodeS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetHandlerConfigs">resetHandlerConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetPublishAuthModes">resetPublishAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetSubscribeAuthModes">resetSubscribeAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHandlerConfigs` <a name="putHandlerConfigs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putHandlerConfigs"></a>

```java
public void putHandlerConfigs(AppsyncChannelNamespaceHandlerConfigs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putHandlerConfigs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>

---

##### `putPublishAuthModes` <a name="putPublishAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putPublishAuthModes"></a>

```java
public void putPublishAuthModes(IResolvable|java.util.List<AppsyncChannelNamespacePublishAuthModes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putPublishAuthModes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>>

---

##### `putSubscribeAuthModes` <a name="putSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putSubscribeAuthModes"></a>

```java
public void putSubscribeAuthModes(IResolvable|java.util.List<AppsyncChannelNamespaceSubscribeAuthModes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putSubscribeAuthModes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppsyncChannelNamespaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>>

---

##### `resetCodeHandlers` <a name="resetCodeHandlers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetCodeHandlers"></a>

```java
public void resetCodeHandlers()
```

##### `resetCodeS3Location` <a name="resetCodeS3Location" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetCodeS3Location"></a>

```java
public void resetCodeS3Location()
```

##### `resetHandlerConfigs` <a name="resetHandlerConfigs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetHandlerConfigs"></a>

```java
public void resetHandlerConfigs()
```

##### `resetPublishAuthModes` <a name="resetPublishAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetPublishAuthModes"></a>

```java
public void resetPublishAuthModes()
```

##### `resetSubscribeAuthModes` <a name="resetSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetSubscribeAuthModes"></a>

```java
public void resetSubscribeAuthModes()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncChannelNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespace;

AppsyncChannelNamespace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespace;

AppsyncChannelNamespace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespace;

AppsyncChannelNamespace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespace;

AppsyncChannelNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsyncChannelNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppsyncChannelNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsyncChannelNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsyncChannelNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncChannelNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.channelNamespaceArn">channelNamespaceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigs">handlerConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference">AppsyncChannelNamespaceHandlerConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthModes">publishAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList">AppsyncChannelNamespacePublishAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthModes">subscribeAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList">AppsyncChannelNamespaceSubscribeAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList">AppsyncChannelNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlersInput">codeHandlersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeS3LocationInput">codeS3LocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigsInput">handlerConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthModesInput">publishAuthModesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthModesInput">subscribeAuthModesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlers">codeHandlers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeS3Location">codeS3Location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelNamespaceArn`<sup>Required</sup> <a name="channelNamespaceArn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.channelNamespaceArn"></a>

```java
public java.lang.String getChannelNamespaceArn();
```

- *Type:* java.lang.String

---

##### `handlerConfigs`<sup>Required</sup> <a name="handlerConfigs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigs"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOutputReference getHandlerConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference">AppsyncChannelNamespaceHandlerConfigsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `publishAuthModes`<sup>Required</sup> <a name="publishAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthModes"></a>

```java
public AppsyncChannelNamespacePublishAuthModesList getPublishAuthModes();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList">AppsyncChannelNamespacePublishAuthModesList</a>

---

##### `subscribeAuthModes`<sup>Required</sup> <a name="subscribeAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthModes"></a>

```java
public AppsyncChannelNamespaceSubscribeAuthModesList getSubscribeAuthModes();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList">AppsyncChannelNamespaceSubscribeAuthModesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tags"></a>

```java
public AppsyncChannelNamespaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList">AppsyncChannelNamespaceTagsList</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `codeHandlersInput`<sup>Optional</sup> <a name="codeHandlersInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlersInput"></a>

```java
public java.lang.String getCodeHandlersInput();
```

- *Type:* java.lang.String

---

##### `codeS3LocationInput`<sup>Optional</sup> <a name="codeS3LocationInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeS3LocationInput"></a>

```java
public java.lang.String getCodeS3LocationInput();
```

- *Type:* java.lang.String

---

##### `handlerConfigsInput`<sup>Optional</sup> <a name="handlerConfigsInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigsInput"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigs getHandlerConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publishAuthModesInput`<sup>Optional</sup> <a name="publishAuthModesInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthModesInput"></a>

```java
public IResolvable|java.util.List<AppsyncChannelNamespacePublishAuthModes> getPublishAuthModesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>>

---

##### `subscribeAuthModesInput`<sup>Optional</sup> <a name="subscribeAuthModesInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthModesInput"></a>

```java
public IResolvable|java.util.List<AppsyncChannelNamespaceSubscribeAuthModes> getSubscribeAuthModesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppsyncChannelNamespaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `codeHandlers`<sup>Required</sup> <a name="codeHandlers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlers"></a>

```java
public java.lang.String getCodeHandlers();
```

- *Type:* java.lang.String

---

##### `codeS3Location`<sup>Required</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeS3Location"></a>

```java
public java.lang.String getCodeS3Location();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncChannelNamespaceConfig <a name="AppsyncChannelNamespaceConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceConfig;

AppsyncChannelNamespaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .name(java.lang.String)
//  .codeHandlers(java.lang.String)
//  .codeS3Location(java.lang.String)
//  .handlerConfigs(AppsyncChannelNamespaceHandlerConfigs)
//  .publishAuthModes(IResolvable|java.util.List<AppsyncChannelNamespacePublishAuthModes>)
//  .subscribeAuthModes(IResolvable|java.util.List<AppsyncChannelNamespaceSubscribeAuthModes>)
//  .tags(IResolvable|java.util.List<AppsyncChannelNamespaceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | AppSync Api Id that this Channel Namespace belongs to. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Namespace indentifier. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.codeHandlers">codeHandlers</a></code> | <code>java.lang.String</code> | String of APPSYNC_JS code to be used by the handlers. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.codeS3Location">codeS3Location</a></code> | <code>java.lang.String</code> | The Amazon S3 endpoint where the code is located. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.handlerConfigs">handlerConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.publishAuthModes">publishAuthModes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>></code> | List of AuthModes supported for Publish operations. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.subscribeAuthModes">subscribeAuthModes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>></code> | List of AuthModes supported for Subscribe operations. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>></code> | An arbitrary set of tags (key-value pairs) for this AppSync API. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

AppSync Api Id that this Channel Namespace belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#api_id AppsyncChannelNamespace#api_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Namespace indentifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#name AppsyncChannelNamespace#name}

---

##### `codeHandlers`<sup>Optional</sup> <a name="codeHandlers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.codeHandlers"></a>

```java
public java.lang.String getCodeHandlers();
```

- *Type:* java.lang.String

String of APPSYNC_JS code to be used by the handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#code_handlers AppsyncChannelNamespace#code_handlers}

---

##### `codeS3Location`<sup>Optional</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.codeS3Location"></a>

```java
public java.lang.String getCodeS3Location();
```

- *Type:* java.lang.String

The Amazon S3 endpoint where the code is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#code_s3_location AppsyncChannelNamespace#code_s3_location}

---

##### `handlerConfigs`<sup>Optional</sup> <a name="handlerConfigs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.handlerConfigs"></a>

```java
public AppsyncChannelNamespaceHandlerConfigs getHandlerConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}.

---

##### `publishAuthModes`<sup>Optional</sup> <a name="publishAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.publishAuthModes"></a>

```java
public IResolvable|java.util.List<AppsyncChannelNamespacePublishAuthModes> getPublishAuthModes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>>

List of AuthModes supported for Publish operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#publish_auth_modes AppsyncChannelNamespace#publish_auth_modes}

---

##### `subscribeAuthModes`<sup>Optional</sup> <a name="subscribeAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.subscribeAuthModes"></a>

```java
public IResolvable|java.util.List<AppsyncChannelNamespaceSubscribeAuthModes> getSubscribeAuthModes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>>

List of AuthModes supported for Subscribe operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#subscribe_auth_modes AppsyncChannelNamespace#subscribe_auth_modes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppsyncChannelNamespaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>>

An arbitrary set of tags (key-value pairs) for this AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#tags AppsyncChannelNamespace#tags}

---

### AppsyncChannelNamespaceHandlerConfigs <a name="AppsyncChannelNamespaceHandlerConfigs" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigs;

AppsyncChannelNamespaceHandlerConfigs.builder()
//  .onPublish(AppsyncChannelNamespaceHandlerConfigsOnPublish)
//  .onSubscribe(AppsyncChannelNamespaceHandlerConfigsOnSubscribe)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onPublish">onPublish</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#on_publish AppsyncChannelNamespace#on_publish}. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onSubscribe">onSubscribe</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#on_subscribe AppsyncChannelNamespace#on_subscribe}. |

---

##### `onPublish`<sup>Optional</sup> <a name="onPublish" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onPublish"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublish getOnPublish();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#on_publish AppsyncChannelNamespace#on_publish}.

---

##### `onSubscribe`<sup>Optional</sup> <a name="onSubscribe" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onSubscribe"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribe getOnSubscribe();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#on_subscribe AppsyncChannelNamespace#on_subscribe}.

---

### AppsyncChannelNamespaceHandlerConfigsOnPublish <a name="AppsyncChannelNamespaceHandlerConfigsOnPublish" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublish;

AppsyncChannelNamespaceHandlerConfigsOnPublish.builder()
//  .behavior(java.lang.String)
//  .integration(AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.behavior">behavior</a></code> | <code>java.lang.String</code> | Integration behavior for a handler configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

Integration behavior for a handler configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.integration"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration getIntegration();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}.

---

### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration;

AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.builder()
//  .dataSourceName(java.lang.String)
//  .lambdaConfig(AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | Data source to invoke for this integration. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}. |

---

##### `dataSourceName`<sup>Optional</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.dataSourceName"></a>

```java
public java.lang.String getDataSourceName();
```

- *Type:* java.lang.String

Data source to invoke for this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.lambdaConfig"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig getLambdaConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}.

---

### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig;

AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.builder()
//  .invokeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.property.invokeType">invokeType</a></code> | <code>java.lang.String</code> | Invocation type for direct lambda integrations. |

---

##### `invokeType`<sup>Optional</sup> <a name="invokeType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.property.invokeType"></a>

```java
public java.lang.String getInvokeType();
```

- *Type:* java.lang.String

Invocation type for direct lambda integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}

---

### AppsyncChannelNamespaceHandlerConfigsOnSubscribe <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribe" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe;

AppsyncChannelNamespaceHandlerConfigsOnSubscribe.builder()
//  .behavior(java.lang.String)
//  .integration(AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.behavior">behavior</a></code> | <code>java.lang.String</code> | Integration behavior for a handler configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

Integration behavior for a handler configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.integration"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration getIntegration();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}.

---

### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration;

AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.builder()
//  .dataSourceName(java.lang.String)
//  .lambdaConfig(AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | Data source to invoke for this integration. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}. |

---

##### `dataSourceName`<sup>Optional</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.dataSourceName"></a>

```java
public java.lang.String getDataSourceName();
```

- *Type:* java.lang.String

Data source to invoke for this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.lambdaConfig"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig getLambdaConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}.

---

### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig;

AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.builder()
//  .invokeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.property.invokeType">invokeType</a></code> | <code>java.lang.String</code> | Invocation type for direct lambda integrations. |

---

##### `invokeType`<sup>Optional</sup> <a name="invokeType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.property.invokeType"></a>

```java
public java.lang.String getInvokeType();
```

- *Type:* java.lang.String

Invocation type for direct lambda integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}

---

### AppsyncChannelNamespacePublishAuthModes <a name="AppsyncChannelNamespacePublishAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespacePublishAuthModes;

AppsyncChannelNamespacePublishAuthModes.builder()
//  .authType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes.property.authType">authType</a></code> | <code>java.lang.String</code> | Security configuration for your AppSync API. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}

---

### AppsyncChannelNamespaceSubscribeAuthModes <a name="AppsyncChannelNamespaceSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceSubscribeAuthModes;

AppsyncChannelNamespaceSubscribeAuthModes.builder()
//  .authType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes.property.authType">authType</a></code> | <code>java.lang.String</code> | Security configuration for your AppSync API. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}

---

### AppsyncChannelNamespaceTags <a name="AppsyncChannelNamespaceTags" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceTags;

AppsyncChannelNamespaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags.property.key">key</a></code> | <code>java.lang.String</code> | A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags.property.value">value</a></code> | <code>java.lang.String</code> | A string containing the value for this tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string used to identify this tag. You can specify a maximum of 128 characters for a tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#key AppsyncChannelNamespace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A string containing the value for this tag.

You can specify a maximum of 256 characters for a tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_channel_namespace#value AppsyncChannelNamespace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resetInvokeType">resetInvokeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInvokeType` <a name="resetInvokeType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resetInvokeType"></a>

```java
public void resetInvokeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeTypeInput">invokeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType">invokeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invokeTypeInput`<sup>Optional</sup> <a name="invokeTypeInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeTypeInput"></a>

```java
public java.lang.String getInvokeTypeInput();
```

- *Type:* java.lang.String

---

##### `invokeType`<sup>Required</sup> <a name="invokeType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```java
public java.lang.String getInvokeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.putLambdaConfig">putLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resetDataSourceName">resetDataSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resetLambdaConfig">resetLambdaConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.putLambdaConfig"></a>

```java
public void putLambdaConfig(AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

---

##### `resetDataSourceName` <a name="resetDataSourceName" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resetDataSourceName"></a>

```java
public void resetDataSourceName()
```

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resetLambdaConfig"></a>

```java
public void resetLambdaConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceNameInput">dataSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference getLambdaConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference</a>

---

##### `dataSourceNameInput`<sup>Optional</sup> <a name="dataSourceNameInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceNameInput"></a>

```java
public java.lang.String getDataSourceNameInput();
```

- *Type:* java.lang.String

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfigInput"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig getLambdaConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName"></a>

```java
public java.lang.String getDataSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.putIntegration">putIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resetIntegration">resetIntegration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntegration` <a name="putIntegration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.putIntegration"></a>

```java
public void putIntegration(AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.putIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

---

##### `resetBehavior` <a name="resetBehavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resetBehavior"></a>

```java
public void resetBehavior()
```

##### `resetIntegration` <a name="resetIntegration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resetIntegration"></a>

```java
public void resetIntegration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integrationInput">integrationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior">behavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference getIntegration();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference</a>

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behaviorInput"></a>

```java
public java.lang.String getBehaviorInput();
```

- *Type:* java.lang.String

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integrationInput"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration getIntegrationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnPublish getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resetInvokeType">resetInvokeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInvokeType` <a name="resetInvokeType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resetInvokeType"></a>

```java
public void resetInvokeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeTypeInput">invokeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType">invokeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invokeTypeInput`<sup>Optional</sup> <a name="invokeTypeInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeTypeInput"></a>

```java
public java.lang.String getInvokeTypeInput();
```

- *Type:* java.lang.String

---

##### `invokeType`<sup>Required</sup> <a name="invokeType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```java
public java.lang.String getInvokeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.putLambdaConfig">putLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resetDataSourceName">resetDataSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resetLambdaConfig">resetLambdaConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.putLambdaConfig"></a>

```java
public void putLambdaConfig(AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

---

##### `resetDataSourceName` <a name="resetDataSourceName" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resetDataSourceName"></a>

```java
public void resetDataSourceName()
```

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resetLambdaConfig"></a>

```java
public void resetLambdaConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceNameInput">dataSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference getLambdaConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference</a>

---

##### `dataSourceNameInput`<sup>Optional</sup> <a name="dataSourceNameInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceNameInput"></a>

```java
public java.lang.String getDataSourceNameInput();
```

- *Type:* java.lang.String

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfigInput"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig getLambdaConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName"></a>

```java
public java.lang.String getDataSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.putIntegration">putIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resetIntegration">resetIntegration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntegration` <a name="putIntegration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.putIntegration"></a>

```java
public void putIntegration(AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.putIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

---

##### `resetBehavior` <a name="resetBehavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resetBehavior"></a>

```java
public void resetBehavior()
```

##### `resetIntegration` <a name="resetIntegration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resetIntegration"></a>

```java
public void resetIntegration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integrationInput">integrationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior">behavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference getIntegration();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference</a>

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behaviorInput"></a>

```java
public java.lang.String getBehaviorInput();
```

- *Type:* java.lang.String

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integrationInput"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration getIntegrationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnSubscribe getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

---


### AppsyncChannelNamespaceHandlerConfigsOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnPublish">putOnPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnSubscribe">putOnSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnPublish">resetOnPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnSubscribe">resetOnSubscribe</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnPublish` <a name="putOnPublish" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnPublish"></a>

```java
public void putOnPublish(AppsyncChannelNamespaceHandlerConfigsOnPublish value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnPublish.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>

---

##### `putOnSubscribe` <a name="putOnSubscribe" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnSubscribe"></a>

```java
public void putOnSubscribe(AppsyncChannelNamespaceHandlerConfigsOnSubscribe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnSubscribe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

---

##### `resetOnPublish` <a name="resetOnPublish" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnPublish"></a>

```java
public void resetOnPublish()
```

##### `resetOnSubscribe` <a name="resetOnSubscribe" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnSubscribe"></a>

```java
public void resetOnSubscribe()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish">onPublish</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe">onSubscribe</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublishInput">onPublishInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribeInput">onSubscribeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onPublish`<sup>Required</sup> <a name="onPublish" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference getOnPublish();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference">AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference</a>

---

##### `onSubscribe`<sup>Required</sup> <a name="onSubscribe" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference getOnSubscribe();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference">AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference</a>

---

##### `onPublishInput`<sup>Optional</sup> <a name="onPublishInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublishInput"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnPublish getOnPublishInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>

---

##### `onSubscribeInput`<sup>Optional</sup> <a name="onSubscribeInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribeInput"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigsOnSubscribe getOnSubscribeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncChannelNamespaceHandlerConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>

---


### AppsyncChannelNamespacePublishAuthModesList <a name="AppsyncChannelNamespacePublishAuthModesList" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespacePublishAuthModesList;

new AppsyncChannelNamespacePublishAuthModesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.get"></a>

```java
public AppsyncChannelNamespacePublishAuthModesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsyncChannelNamespacePublishAuthModes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>>

---


### AppsyncChannelNamespacePublishAuthModesOutputReference <a name="AppsyncChannelNamespacePublishAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespacePublishAuthModesOutputReference;

new AppsyncChannelNamespacePublishAuthModesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModesOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncChannelNamespacePublishAuthModes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModes">AppsyncChannelNamespacePublishAuthModes</a>

---


### AppsyncChannelNamespaceSubscribeAuthModesList <a name="AppsyncChannelNamespaceSubscribeAuthModesList" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceSubscribeAuthModesList;

new AppsyncChannelNamespaceSubscribeAuthModesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.get"></a>

```java
public AppsyncChannelNamespaceSubscribeAuthModesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsyncChannelNamespaceSubscribeAuthModes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>>

---


### AppsyncChannelNamespaceSubscribeAuthModesOutputReference <a name="AppsyncChannelNamespaceSubscribeAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference;

new AppsyncChannelNamespaceSubscribeAuthModesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncChannelNamespaceSubscribeAuthModes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModes">AppsyncChannelNamespaceSubscribeAuthModes</a>

---


### AppsyncChannelNamespaceTagsList <a name="AppsyncChannelNamespaceTagsList" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceTagsList;

new AppsyncChannelNamespaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.get"></a>

```java
public AppsyncChannelNamespaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsyncChannelNamespaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>>

---


### AppsyncChannelNamespaceTagsOutputReference <a name="AppsyncChannelNamespaceTagsOutputReference" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_channel_namespace.AppsyncChannelNamespaceTagsOutputReference;

new AppsyncChannelNamespaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncChannelNamespaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncChannelNamespace.AppsyncChannelNamespaceTags">AppsyncChannelNamespaceTags</a>

---



