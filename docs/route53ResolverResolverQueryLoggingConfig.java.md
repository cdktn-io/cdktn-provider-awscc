# `route53ResolverResolverQueryLoggingConfig` Submodule <a name="`route53ResolverResolverQueryLoggingConfig` Submodule" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverResolverQueryLoggingConfig <a name="Route53ResolverResolverQueryLoggingConfig" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_query_logging_config awscc_route53resolver_resolver_query_logging_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_query_logging_config.Route53ResolverResolverQueryLoggingConfig;

Route53ResolverResolverQueryLoggingConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .destinationArn(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53ResolverResolverQueryLoggingConfigTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | destination arn. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | ResolverQueryLogConfigName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.destinationArn"></a>

- *Type:* java.lang.String

destination arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_query_logging_config#destination_arn Route53ResolverResolverQueryLoggingConfig#destination_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

ResolverQueryLogConfigName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_query_logging_config#name Route53ResolverResolverQueryLoggingConfig#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_query_logging_config#tags Route53ResolverResolverQueryLoggingConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Route53ResolverResolverQueryLoggingConfigTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>>

---

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetDestinationArn"></a>

```java
public void resetDestinationArn()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverResolverQueryLoggingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_query_logging_config.Route53ResolverResolverQueryLoggingConfig;

Route53ResolverResolverQueryLoggingConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_query_logging_config.Route53ResolverResolverQueryLoggingConfig;

Route53ResolverResolverQueryLoggingConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_query_logging_config.Route53ResolverResolverQueryLoggingConfig;

Route53ResolverResolverQueryLoggingConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_query_logging_config.Route53ResolverResolverQueryLoggingConfig;

Route53ResolverResolverQueryLoggingConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53ResolverResolverQueryLoggingConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53ResolverResolverQueryLoggingConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53ResolverResolverQueryLoggingConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53ResolverResolverQueryLoggingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_query_logging_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverResolverQueryLoggingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.associationCount">associationCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creatorRequestId">creatorRequestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.resolverQueryLoggingConfigId">resolverQueryLoggingConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.shareStatus">shareStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList">Route53ResolverResolverQueryLoggingConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArnInput">destinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `associationCount`<sup>Required</sup> <a name="associationCount" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.associationCount"></a>

```java
public java.lang.Number getAssociationCount();
```

- *Type:* java.lang.Number

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `creatorRequestId`<sup>Required</sup> <a name="creatorRequestId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creatorRequestId"></a>

```java
public java.lang.String getCreatorRequestId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `resolverQueryLoggingConfigId`<sup>Required</sup> <a name="resolverQueryLoggingConfigId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.resolverQueryLoggingConfigId"></a>

```java
public java.lang.String getResolverQueryLoggingConfigId();
```

- *Type:* java.lang.String

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.shareStatus"></a>

```java
public java.lang.String getShareStatus();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tags"></a>

```java
public Route53ResolverResolverQueryLoggingConfigTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList">Route53ResolverResolverQueryLoggingConfigTagsList</a>

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArnInput"></a>

```java
public java.lang.String getDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Route53ResolverResolverQueryLoggingConfigTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>>

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverResolverQueryLoggingConfigConfig <a name="Route53ResolverResolverQueryLoggingConfigConfig" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_query_logging_config.Route53ResolverResolverQueryLoggingConfigConfig;

Route53ResolverResolverQueryLoggingConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .destinationArn(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53ResolverResolverQueryLoggingConfigTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | destination arn. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | ResolverQueryLogConfigName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

destination arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_query_logging_config#destination_arn Route53ResolverResolverQueryLoggingConfig#destination_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

ResolverQueryLogConfigName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_query_logging_config#name Route53ResolverResolverQueryLoggingConfig#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Route53ResolverResolverQueryLoggingConfigTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_query_logging_config#tags Route53ResolverResolverQueryLoggingConfig#tags}

---

### Route53ResolverResolverQueryLoggingConfigTags <a name="Route53ResolverResolverQueryLoggingConfigTags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_query_logging_config.Route53ResolverResolverQueryLoggingConfigTags;

Route53ResolverResolverQueryLoggingConfigTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_query_logging_config#key Route53ResolverResolverQueryLoggingConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_query_logging_config#value Route53ResolverResolverQueryLoggingConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverResolverQueryLoggingConfigTagsList <a name="Route53ResolverResolverQueryLoggingConfigTagsList" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_query_logging_config.Route53ResolverResolverQueryLoggingConfigTagsList;

new Route53ResolverResolverQueryLoggingConfigTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.get"></a>

```java
public Route53ResolverResolverQueryLoggingConfigTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53ResolverResolverQueryLoggingConfigTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>>

---


### Route53ResolverResolverQueryLoggingConfigTagsOutputReference <a name="Route53ResolverResolverQueryLoggingConfigTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_query_logging_config.Route53ResolverResolverQueryLoggingConfigTagsOutputReference;

new Route53ResolverResolverQueryLoggingConfigTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53ResolverResolverQueryLoggingConfigTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>

---



