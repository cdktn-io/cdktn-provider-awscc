# `rdsDbProxy` Submodule <a name="`rdsDbProxy` Submodule" id="@cdktn/provider-awscc.rdsDbProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbProxy <a name="RdsDbProxy" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy awscc_rds_db_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxy;

RdsDbProxy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbProxyName(java.lang.String)
    .engineFamily(java.lang.String)
    .roleArn(java.lang.String)
    .vpcSubnetIds(java.util.List<java.lang.String>)
//  .auth(IResolvable|java.util.List<RdsDbProxyAuth>)
//  .debugLogging(java.lang.Boolean|IResolvable)
//  .defaultAuthScheme(java.lang.String)
//  .endpointNetworkType(java.lang.String)
//  .idleClientTimeout(java.lang.Number)
//  .requireTls(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<RdsDbProxyTags>)
//  .targetConnectionNetworkType(java.lang.String)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.dbProxyName">dbProxyName</a></code> | <code>java.lang.String</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.engineFamily">engineFamily</a></code> | <code>java.lang.String</code> | The kinds of databases that the proxy can connect to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | VPC subnet IDs to associate with the new proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.auth">auth</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>></code> | The authorization mechanism that the proxy uses. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.debugLogging">debugLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the proxy includes detailed information about SQL statements in its logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.defaultAuthScheme">defaultAuthScheme</a></code> | <code>java.lang.String</code> | The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.endpointNetworkType">endpointNetworkType</a></code> | <code>java.lang.String</code> | The network type of the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.idleClientTimeout">idleClientTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.requireTls">requireTls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>></code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.targetConnectionNetworkType">targetConnectionNetworkType</a></code> | <code>java.lang.String</code> | The network type that the proxy uses to connect to the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | VPC security group IDs to associate with the new proxy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.dbProxyName"></a>

- *Type:* java.lang.String

The identifier for the proxy.

This name must be unique for all proxies owned by your AWS account in the specified AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#db_proxy_name RdsDbProxy#db_proxy_name}

---

##### `engineFamily`<sup>Required</sup> <a name="engineFamily" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.engineFamily"></a>

- *Type:* java.lang.String

The kinds of databases that the proxy can connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#engine_family RdsDbProxy#engine_family}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#role_arn RdsDbProxy#role_arn}

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.vpcSubnetIds"></a>

- *Type:* java.util.List<java.lang.String>

VPC subnet IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#vpc_subnet_ids RdsDbProxy#vpc_subnet_ids}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.auth"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>>

The authorization mechanism that the proxy uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#auth RdsDbProxy#auth}

---

##### `debugLogging`<sup>Optional</sup> <a name="debugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.debugLogging"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the proxy includes detailed information about SQL statements in its logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#debug_logging RdsDbProxy#debug_logging}

---

##### `defaultAuthScheme`<sup>Optional</sup> <a name="defaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.defaultAuthScheme"></a>

- *Type:* java.lang.String

The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#default_auth_scheme RdsDbProxy#default_auth_scheme}

---

##### `endpointNetworkType`<sup>Optional</sup> <a name="endpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.endpointNetworkType"></a>

- *Type:* java.lang.String

The network type of the DB proxy endpoint.

The network type determines the IP version that the proxy endpoint supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#endpoint_network_type RdsDbProxy#endpoint_network_type}

---

##### `idleClientTimeout`<sup>Optional</sup> <a name="idleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.idleClientTimeout"></a>

- *Type:* java.lang.Number

The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#idle_client_timeout RdsDbProxy#idle_client_timeout}

---

##### `requireTls`<sup>Optional</sup> <a name="requireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.requireTls"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#require_tls RdsDbProxy#require_tls}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>>

An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#tags RdsDbProxy#tags}

---

##### `targetConnectionNetworkType`<sup>Optional</sup> <a name="targetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.targetConnectionNetworkType"></a>

- *Type:* java.lang.String

The network type that the proxy uses to connect to the target database.

The network type determines the IP version that the proxy uses for connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#target_connection_network_type RdsDbProxy#target_connection_network_type}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

VPC security group IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#vpc_security_group_ids RdsDbProxy#vpc_security_group_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth">putAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetAuth">resetAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDebugLogging">resetDebugLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDefaultAuthScheme">resetDefaultAuthScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetEndpointNetworkType">resetEndpointNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetIdleClientTimeout">resetIdleClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetRequireTls">resetRequireTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTargetConnectionNetworkType">resetTargetConnectionNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuth` <a name="putAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth"></a>

```java
public void putAuth(IResolvable|java.util.List<RdsDbProxyAuth> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RdsDbProxyTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>>

---

##### `resetAuth` <a name="resetAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetAuth"></a>

```java
public void resetAuth()
```

##### `resetDebugLogging` <a name="resetDebugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDebugLogging"></a>

```java
public void resetDebugLogging()
```

##### `resetDefaultAuthScheme` <a name="resetDefaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDefaultAuthScheme"></a>

```java
public void resetDefaultAuthScheme()
```

##### `resetEndpointNetworkType` <a name="resetEndpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetEndpointNetworkType"></a>

```java
public void resetEndpointNetworkType()
```

##### `resetIdleClientTimeout` <a name="resetIdleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetIdleClientTimeout"></a>

```java
public void resetIdleClientTimeout()
```

##### `resetRequireTls` <a name="resetRequireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetRequireTls"></a>

```java
public void resetRequireTls()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetConnectionNetworkType` <a name="resetTargetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTargetConnectionNetworkType"></a>

```java
public void resetTargetConnectionNetworkType()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbProxy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxy;

RdsDbProxy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxy;

RdsDbProxy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxy;

RdsDbProxy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxy;

RdsDbProxy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsDbProxy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RdsDbProxy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsDbProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsDbProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.auth">auth</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList">RdsDbProxyAuthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyArn">dbProxyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList">RdsDbProxyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.authInput">authInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyNameInput">dbProxyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLoggingInput">debugLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthSchemeInput">defaultAuthSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkTypeInput">endpointNetworkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamilyInput">engineFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeoutInput">idleClientTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTlsInput">requireTlsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkTypeInput">targetConnectionNetworkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIdsInput">vpcSubnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyName">dbProxyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLogging">debugLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthScheme">defaultAuthScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkType">endpointNetworkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamily">engineFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeout">idleClientTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTls">requireTls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkType">targetConnectionNetworkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.auth"></a>

```java
public RdsDbProxyAuthList getAuth();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList">RdsDbProxyAuthList</a>

---

##### `dbProxyArn`<sup>Required</sup> <a name="dbProxyArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyArn"></a>

```java
public java.lang.String getDbProxyArn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tags"></a>

```java
public RdsDbProxyTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList">RdsDbProxyTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.authInput"></a>

```java
public IResolvable|java.util.List<RdsDbProxyAuth> getAuthInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>>

---

##### `dbProxyNameInput`<sup>Optional</sup> <a name="dbProxyNameInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyNameInput"></a>

```java
public java.lang.String getDbProxyNameInput();
```

- *Type:* java.lang.String

---

##### `debugLoggingInput`<sup>Optional</sup> <a name="debugLoggingInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getDebugLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultAuthSchemeInput`<sup>Optional</sup> <a name="defaultAuthSchemeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthSchemeInput"></a>

```java
public java.lang.String getDefaultAuthSchemeInput();
```

- *Type:* java.lang.String

---

##### `endpointNetworkTypeInput`<sup>Optional</sup> <a name="endpointNetworkTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkTypeInput"></a>

```java
public java.lang.String getEndpointNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `engineFamilyInput`<sup>Optional</sup> <a name="engineFamilyInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamilyInput"></a>

```java
public java.lang.String getEngineFamilyInput();
```

- *Type:* java.lang.String

---

##### `idleClientTimeoutInput`<sup>Optional</sup> <a name="idleClientTimeoutInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeoutInput"></a>

```java
public java.lang.Number getIdleClientTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `requireTlsInput`<sup>Optional</sup> <a name="requireTlsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTlsInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireTlsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RdsDbProxyTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>>

---

##### `targetConnectionNetworkTypeInput`<sup>Optional</sup> <a name="targetConnectionNetworkTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkTypeInput"></a>

```java
public java.lang.String getTargetConnectionNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcSubnetIdsInput`<sup>Optional</sup> <a name="vpcSubnetIdsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyName"></a>

```java
public java.lang.String getDbProxyName();
```

- *Type:* java.lang.String

---

##### `debugLogging`<sup>Required</sup> <a name="debugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLogging"></a>

```java
public java.lang.Boolean|IResolvable getDebugLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultAuthScheme`<sup>Required</sup> <a name="defaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthScheme"></a>

```java
public java.lang.String getDefaultAuthScheme();
```

- *Type:* java.lang.String

---

##### `endpointNetworkType`<sup>Required</sup> <a name="endpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkType"></a>

```java
public java.lang.String getEndpointNetworkType();
```

- *Type:* java.lang.String

---

##### `engineFamily`<sup>Required</sup> <a name="engineFamily" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamily"></a>

```java
public java.lang.String getEngineFamily();
```

- *Type:* java.lang.String

---

##### `idleClientTimeout`<sup>Required</sup> <a name="idleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeout"></a>

```java
public java.lang.Number getIdleClientTimeout();
```

- *Type:* java.lang.Number

---

##### `requireTls`<sup>Required</sup> <a name="requireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTls"></a>

```java
public java.lang.Boolean|IResolvable getRequireTls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `targetConnectionNetworkType`<sup>Required</sup> <a name="targetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkType"></a>

```java
public java.lang.String getTargetConnectionNetworkType();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbProxyAuth <a name="RdsDbProxyAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxyAuth;

RdsDbProxyAuth.builder()
//  .authScheme(java.lang.String)
//  .clientPasswordAuthType(java.lang.String)
//  .description(java.lang.String)
//  .iamAuth(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.authScheme">authScheme</a></code> | <code>java.lang.String</code> | The type of authentication that the proxy uses for connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.clientPasswordAuthType">clientPasswordAuthType</a></code> | <code>java.lang.String</code> | The type of authentication the proxy uses for connections from clients. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.description">description</a></code> | <code>java.lang.String</code> | A user-specified description about the authentication used by a proxy to log in as a specific database user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.iamAuth">iamAuth</a></code> | <code>java.lang.String</code> | Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. |

---

##### `authScheme`<sup>Optional</sup> <a name="authScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.authScheme"></a>

```java
public java.lang.String getAuthScheme();
```

- *Type:* java.lang.String

The type of authentication that the proxy uses for connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#auth_scheme RdsDbProxy#auth_scheme}

---

##### `clientPasswordAuthType`<sup>Optional</sup> <a name="clientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.clientPasswordAuthType"></a>

```java
public java.lang.String getClientPasswordAuthType();
```

- *Type:* java.lang.String

The type of authentication the proxy uses for connections from clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#client_password_auth_type RdsDbProxy#client_password_auth_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A user-specified description about the authentication used by a proxy to log in as a specific database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#description RdsDbProxy#description}

---

##### `iamAuth`<sup>Optional</sup> <a name="iamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.iamAuth"></a>

```java
public java.lang.String getIamAuth();
```

- *Type:* java.lang.String

Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy.

The ENABLED value is valid only for proxies with RDS for Microsoft SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#iam_auth RdsDbProxy#iam_auth}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster.

These secrets are stored within Amazon Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#secret_arn RdsDbProxy#secret_arn}

---

### RdsDbProxyConfig <a name="RdsDbProxyConfig" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxyConfig;

RdsDbProxyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbProxyName(java.lang.String)
    .engineFamily(java.lang.String)
    .roleArn(java.lang.String)
    .vpcSubnetIds(java.util.List<java.lang.String>)
//  .auth(IResolvable|java.util.List<RdsDbProxyAuth>)
//  .debugLogging(java.lang.Boolean|IResolvable)
//  .defaultAuthScheme(java.lang.String)
//  .endpointNetworkType(java.lang.String)
//  .idleClientTimeout(java.lang.Number)
//  .requireTls(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<RdsDbProxyTags>)
//  .targetConnectionNetworkType(java.lang.String)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dbProxyName">dbProxyName</a></code> | <code>java.lang.String</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.engineFamily">engineFamily</a></code> | <code>java.lang.String</code> | The kinds of databases that the proxy can connect to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | VPC subnet IDs to associate with the new proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.auth">auth</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>></code> | The authorization mechanism that the proxy uses. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.debugLogging">debugLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the proxy includes detailed information about SQL statements in its logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.defaultAuthScheme">defaultAuthScheme</a></code> | <code>java.lang.String</code> | The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.endpointNetworkType">endpointNetworkType</a></code> | <code>java.lang.String</code> | The network type of the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.idleClientTimeout">idleClientTimeout</a></code> | <code>java.lang.Number</code> | The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.requireTls">requireTls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>></code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.targetConnectionNetworkType">targetConnectionNetworkType</a></code> | <code>java.lang.String</code> | The network type that the proxy uses to connect to the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | VPC security group IDs to associate with the new proxy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dbProxyName"></a>

```java
public java.lang.String getDbProxyName();
```

- *Type:* java.lang.String

The identifier for the proxy.

This name must be unique for all proxies owned by your AWS account in the specified AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#db_proxy_name RdsDbProxy#db_proxy_name}

---

##### `engineFamily`<sup>Required</sup> <a name="engineFamily" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.engineFamily"></a>

```java
public java.lang.String getEngineFamily();
```

- *Type:* java.lang.String

The kinds of databases that the proxy can connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#engine_family RdsDbProxy#engine_family}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#role_arn RdsDbProxy#role_arn}

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

VPC subnet IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#vpc_subnet_ids RdsDbProxy#vpc_subnet_ids}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.auth"></a>

```java
public IResolvable|java.util.List<RdsDbProxyAuth> getAuth();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>>

The authorization mechanism that the proxy uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#auth RdsDbProxy#auth}

---

##### `debugLogging`<sup>Optional</sup> <a name="debugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.debugLogging"></a>

```java
public java.lang.Boolean|IResolvable getDebugLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the proxy includes detailed information about SQL statements in its logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#debug_logging RdsDbProxy#debug_logging}

---

##### `defaultAuthScheme`<sup>Optional</sup> <a name="defaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.defaultAuthScheme"></a>

```java
public java.lang.String getDefaultAuthScheme();
```

- *Type:* java.lang.String

The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#default_auth_scheme RdsDbProxy#default_auth_scheme}

---

##### `endpointNetworkType`<sup>Optional</sup> <a name="endpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.endpointNetworkType"></a>

```java
public java.lang.String getEndpointNetworkType();
```

- *Type:* java.lang.String

The network type of the DB proxy endpoint.

The network type determines the IP version that the proxy endpoint supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#endpoint_network_type RdsDbProxy#endpoint_network_type}

---

##### `idleClientTimeout`<sup>Optional</sup> <a name="idleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.idleClientTimeout"></a>

```java
public java.lang.Number getIdleClientTimeout();
```

- *Type:* java.lang.Number

The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#idle_client_timeout RdsDbProxy#idle_client_timeout}

---

##### `requireTls`<sup>Optional</sup> <a name="requireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.requireTls"></a>

```java
public java.lang.Boolean|IResolvable getRequireTls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#require_tls RdsDbProxy#require_tls}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RdsDbProxyTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>>

An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#tags RdsDbProxy#tags}

---

##### `targetConnectionNetworkType`<sup>Optional</sup> <a name="targetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.targetConnectionNetworkType"></a>

```java
public java.lang.String getTargetConnectionNetworkType();
```

- *Type:* java.lang.String

The network type that the proxy uses to connect to the target database.

The network type determines the IP version that the proxy uses for connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#target_connection_network_type RdsDbProxy#target_connection_network_type}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

VPC security group IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#vpc_security_group_ids RdsDbProxy#vpc_security_group_ids}

---

### RdsDbProxyTags <a name="RdsDbProxyTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxyTags;

RdsDbProxyTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#key RdsDbProxy#key}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#value RdsDbProxy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#key RdsDbProxy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_proxy#value RdsDbProxy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbProxyAuthList <a name="RdsDbProxyAuthList" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxyAuthList;

new RdsDbProxyAuthList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get"></a>

```java
public RdsDbProxyAuthOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDbProxyAuth> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>>

---


### RdsDbProxyAuthOutputReference <a name="RdsDbProxyAuthOutputReference" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxyAuthOutputReference;

new RdsDbProxyAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetAuthScheme">resetAuthScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetClientPasswordAuthType">resetClientPasswordAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetIamAuth">resetIamAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthScheme` <a name="resetAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetAuthScheme"></a>

```java
public void resetAuthScheme()
```

##### `resetClientPasswordAuthType` <a name="resetClientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetClientPasswordAuthType"></a>

```java
public void resetClientPasswordAuthType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIamAuth` <a name="resetIamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetIamAuth"></a>

```java
public void resetIamAuth()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authSchemeInput">authSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthTypeInput">clientPasswordAuthTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuthInput">iamAuthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authScheme">authScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthType">clientPasswordAuthType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuth">iamAuth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authSchemeInput`<sup>Optional</sup> <a name="authSchemeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authSchemeInput"></a>

```java
public java.lang.String getAuthSchemeInput();
```

- *Type:* java.lang.String

---

##### `clientPasswordAuthTypeInput`<sup>Optional</sup> <a name="clientPasswordAuthTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthTypeInput"></a>

```java
public java.lang.String getClientPasswordAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `iamAuthInput`<sup>Optional</sup> <a name="iamAuthInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuthInput"></a>

```java
public java.lang.String getIamAuthInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `authScheme`<sup>Required</sup> <a name="authScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authScheme"></a>

```java
public java.lang.String getAuthScheme();
```

- *Type:* java.lang.String

---

##### `clientPasswordAuthType`<sup>Required</sup> <a name="clientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthType"></a>

```java
public java.lang.String getClientPasswordAuthType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `iamAuth`<sup>Required</sup> <a name="iamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuth"></a>

```java
public java.lang.String getIamAuth();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbProxyAuth getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>

---


### RdsDbProxyTagsList <a name="RdsDbProxyTagsList" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxyTagsList;

new RdsDbProxyTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get"></a>

```java
public RdsDbProxyTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDbProxyTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>>

---


### RdsDbProxyTagsOutputReference <a name="RdsDbProxyTagsOutputReference" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_proxy.RdsDbProxyTagsOutputReference;

new RdsDbProxyTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbProxyTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>

---



