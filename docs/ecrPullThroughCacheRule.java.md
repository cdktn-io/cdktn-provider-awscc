# `ecrPullThroughCacheRule` Submodule <a name="`ecrPullThroughCacheRule` Submodule" id="@cdktn/provider-awscc.ecrPullThroughCacheRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrPullThroughCacheRule <a name="EcrPullThroughCacheRule" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule awscc_ecr_pull_through_cache_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_pull_through_cache_rule.EcrPullThroughCacheRule;

EcrPullThroughCacheRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .credentialArn(java.lang.String)
//  .customRoleArn(java.lang.String)
//  .ecrRepositoryPrefix(java.lang.String)
//  .upstreamRegistry(java.lang.String)
//  .upstreamRegistryUrl(java.lang.String)
//  .upstreamRepositoryPrefix(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.credentialArn">credentialArn</a></code> | <code>java.lang.String</code> | The ARN of the Secrets Manager secret associated with the pull through cache rule. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.customRoleArn">customRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role associated with the pull through cache rule. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.ecrRepositoryPrefix">ecrRepositoryPrefix</a></code> | <code>java.lang.String</code> | The Amazon ECR repository prefix associated with the pull through cache rule. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRegistry">upstreamRegistry</a></code> | <code>java.lang.String</code> | The name of the upstream source registry associated with the pull through cache rule. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRegistryUrl">upstreamRegistryUrl</a></code> | <code>java.lang.String</code> | The upstream registry URL associated with the pull through cache rule. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRepositoryPrefix">upstreamRepositoryPrefix</a></code> | <code>java.lang.String</code> | The upstream repository prefix associated with the pull through cache rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `credentialArn`<sup>Optional</sup> <a name="credentialArn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.credentialArn"></a>

- *Type:* java.lang.String

The ARN of the Secrets Manager secret associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}

---

##### `customRoleArn`<sup>Optional</sup> <a name="customRoleArn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.customRoleArn"></a>

- *Type:* java.lang.String

The ARN of the IAM role associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#custom_role_arn EcrPullThroughCacheRule#custom_role_arn}

---

##### `ecrRepositoryPrefix`<sup>Optional</sup> <a name="ecrRepositoryPrefix" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.ecrRepositoryPrefix"></a>

- *Type:* java.lang.String

The Amazon ECR repository prefix associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}

---

##### `upstreamRegistry`<sup>Optional</sup> <a name="upstreamRegistry" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRegistry"></a>

- *Type:* java.lang.String

The name of the upstream source registry associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry EcrPullThroughCacheRule#upstream_registry}

---

##### `upstreamRegistryUrl`<sup>Optional</sup> <a name="upstreamRegistryUrl" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRegistryUrl"></a>

- *Type:* java.lang.String

The upstream registry URL associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}

---

##### `upstreamRepositoryPrefix`<sup>Optional</sup> <a name="upstreamRepositoryPrefix" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRepositoryPrefix"></a>

- *Type:* java.lang.String

The upstream repository prefix associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#upstream_repository_prefix EcrPullThroughCacheRule#upstream_repository_prefix}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCredentialArn">resetCredentialArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCustomRoleArn">resetCustomRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetEcrRepositoryPrefix">resetEcrRepositoryPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRegistry">resetUpstreamRegistry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRegistryUrl">resetUpstreamRegistryUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRepositoryPrefix">resetUpstreamRepositoryPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCredentialArn` <a name="resetCredentialArn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCredentialArn"></a>

```java
public void resetCredentialArn()
```

##### `resetCustomRoleArn` <a name="resetCustomRoleArn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCustomRoleArn"></a>

```java
public void resetCustomRoleArn()
```

##### `resetEcrRepositoryPrefix` <a name="resetEcrRepositoryPrefix" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetEcrRepositoryPrefix"></a>

```java
public void resetEcrRepositoryPrefix()
```

##### `resetUpstreamRegistry` <a name="resetUpstreamRegistry" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRegistry"></a>

```java
public void resetUpstreamRegistry()
```

##### `resetUpstreamRegistryUrl` <a name="resetUpstreamRegistryUrl" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRegistryUrl"></a>

```java
public void resetUpstreamRegistryUrl()
```

##### `resetUpstreamRepositoryPrefix` <a name="resetUpstreamRepositoryPrefix" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRepositoryPrefix"></a>

```java
public void resetUpstreamRepositoryPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcrPullThroughCacheRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ecr_pull_through_cache_rule.EcrPullThroughCacheRule;

EcrPullThroughCacheRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ecr_pull_through_cache_rule.EcrPullThroughCacheRule;

EcrPullThroughCacheRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ecr_pull_through_cache_rule.EcrPullThroughCacheRule;

EcrPullThroughCacheRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ecr_pull_through_cache_rule.EcrPullThroughCacheRule;

EcrPullThroughCacheRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EcrPullThroughCacheRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EcrPullThroughCacheRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EcrPullThroughCacheRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EcrPullThroughCacheRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EcrPullThroughCacheRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArnInput">credentialArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArnInput">customRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput">ecrRepositoryPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryInput">upstreamRegistryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput">upstreamRegistryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefixInput">upstreamRepositoryPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArn">credentialArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArn">customRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix">ecrRepositoryPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistry">upstreamRegistry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl">upstreamRegistryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefix">upstreamRepositoryPrefix</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `credentialArnInput`<sup>Optional</sup> <a name="credentialArnInput" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArnInput"></a>

```java
public java.lang.String getCredentialArnInput();
```

- *Type:* java.lang.String

---

##### `customRoleArnInput`<sup>Optional</sup> <a name="customRoleArnInput" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArnInput"></a>

```java
public java.lang.String getCustomRoleArnInput();
```

- *Type:* java.lang.String

---

##### `ecrRepositoryPrefixInput`<sup>Optional</sup> <a name="ecrRepositoryPrefixInput" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput"></a>

```java
public java.lang.String getEcrRepositoryPrefixInput();
```

- *Type:* java.lang.String

---

##### `upstreamRegistryInput`<sup>Optional</sup> <a name="upstreamRegistryInput" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryInput"></a>

```java
public java.lang.String getUpstreamRegistryInput();
```

- *Type:* java.lang.String

---

##### `upstreamRegistryUrlInput`<sup>Optional</sup> <a name="upstreamRegistryUrlInput" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput"></a>

```java
public java.lang.String getUpstreamRegistryUrlInput();
```

- *Type:* java.lang.String

---

##### `upstreamRepositoryPrefixInput`<sup>Optional</sup> <a name="upstreamRepositoryPrefixInput" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefixInput"></a>

```java
public java.lang.String getUpstreamRepositoryPrefixInput();
```

- *Type:* java.lang.String

---

##### `credentialArn`<sup>Required</sup> <a name="credentialArn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArn"></a>

```java
public java.lang.String getCredentialArn();
```

- *Type:* java.lang.String

---

##### `customRoleArn`<sup>Required</sup> <a name="customRoleArn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArn"></a>

```java
public java.lang.String getCustomRoleArn();
```

- *Type:* java.lang.String

---

##### `ecrRepositoryPrefix`<sup>Required</sup> <a name="ecrRepositoryPrefix" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix"></a>

```java
public java.lang.String getEcrRepositoryPrefix();
```

- *Type:* java.lang.String

---

##### `upstreamRegistry`<sup>Required</sup> <a name="upstreamRegistry" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistry"></a>

```java
public java.lang.String getUpstreamRegistry();
```

- *Type:* java.lang.String

---

##### `upstreamRegistryUrl`<sup>Required</sup> <a name="upstreamRegistryUrl" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl"></a>

```java
public java.lang.String getUpstreamRegistryUrl();
```

- *Type:* java.lang.String

---

##### `upstreamRepositoryPrefix`<sup>Required</sup> <a name="upstreamRepositoryPrefix" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefix"></a>

```java
public java.lang.String getUpstreamRepositoryPrefix();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcrPullThroughCacheRuleConfig <a name="EcrPullThroughCacheRuleConfig" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_pull_through_cache_rule.EcrPullThroughCacheRuleConfig;

EcrPullThroughCacheRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .credentialArn(java.lang.String)
//  .customRoleArn(java.lang.String)
//  .ecrRepositoryPrefix(java.lang.String)
//  .upstreamRegistry(java.lang.String)
//  .upstreamRegistryUrl(java.lang.String)
//  .upstreamRepositoryPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.credentialArn">credentialArn</a></code> | <code>java.lang.String</code> | The ARN of the Secrets Manager secret associated with the pull through cache rule. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.customRoleArn">customRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role associated with the pull through cache rule. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix">ecrRepositoryPrefix</a></code> | <code>java.lang.String</code> | The Amazon ECR repository prefix associated with the pull through cache rule. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistry">upstreamRegistry</a></code> | <code>java.lang.String</code> | The name of the upstream source registry associated with the pull through cache rule. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl">upstreamRegistryUrl</a></code> | <code>java.lang.String</code> | The upstream registry URL associated with the pull through cache rule. |
| <code><a href="#@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRepositoryPrefix">upstreamRepositoryPrefix</a></code> | <code>java.lang.String</code> | The upstream repository prefix associated with the pull through cache rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `credentialArn`<sup>Optional</sup> <a name="credentialArn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.credentialArn"></a>

```java
public java.lang.String getCredentialArn();
```

- *Type:* java.lang.String

The ARN of the Secrets Manager secret associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}

---

##### `customRoleArn`<sup>Optional</sup> <a name="customRoleArn" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.customRoleArn"></a>

```java
public java.lang.String getCustomRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#custom_role_arn EcrPullThroughCacheRule#custom_role_arn}

---

##### `ecrRepositoryPrefix`<sup>Optional</sup> <a name="ecrRepositoryPrefix" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix"></a>

```java
public java.lang.String getEcrRepositoryPrefix();
```

- *Type:* java.lang.String

The Amazon ECR repository prefix associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}

---

##### `upstreamRegistry`<sup>Optional</sup> <a name="upstreamRegistry" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistry"></a>

```java
public java.lang.String getUpstreamRegistry();
```

- *Type:* java.lang.String

The name of the upstream source registry associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry EcrPullThroughCacheRule#upstream_registry}

---

##### `upstreamRegistryUrl`<sup>Optional</sup> <a name="upstreamRegistryUrl" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl"></a>

```java
public java.lang.String getUpstreamRegistryUrl();
```

- *Type:* java.lang.String

The upstream registry URL associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}

---

##### `upstreamRepositoryPrefix`<sup>Optional</sup> <a name="upstreamRepositoryPrefix" id="@cdktn/provider-awscc.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRepositoryPrefix"></a>

```java
public java.lang.String getUpstreamRepositoryPrefix();
```

- *Type:* java.lang.String

The upstream repository prefix associated with the pull through cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#upstream_repository_prefix EcrPullThroughCacheRule#upstream_repository_prefix}

---



