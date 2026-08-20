# `securityagentAgentSpace` Submodule <a name="`securityagentAgentSpace` Submodule" id="@cdktn/provider-awscc.securityagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentAgentSpace <a name="SecurityagentAgentSpace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space awscc_securityagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpace;

SecurityagentAgentSpace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .awsResources(SecurityagentAgentSpaceAwsResources)
//  .codeReviewSettings(SecurityagentAgentSpaceCodeReviewSettings)
//  .description(java.lang.String)
//  .integratedResources(IResolvable|java.util.List<SecurityagentAgentSpaceIntegratedResources>)
//  .kmsKeyId(java.lang.String)
//  .tags(IResolvable|java.util.List<SecurityagentAgentSpaceTags>)
//  .targetDomainIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the agent space. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.awsResources">awsResources</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a></code> | AWS resource configuration. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.codeReviewSettings">codeReviewSettings</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a></code> | Details of code review settings. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the agent space. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.integratedResources">integratedResources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>></code> | Integrated Resources configuration. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Identifier of the KMS key used to encrypt data. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>></code> | Tags for the agent space. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.targetDomainIds">targetDomainIds</a></code> | <code>java.util.List<java.lang.String></code> | List of target domain identifiers registered with the agent space. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#name SecurityagentAgentSpace#name}

---

##### `awsResources`<sup>Optional</sup> <a name="awsResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.awsResources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a>

AWS resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#aws_resources SecurityagentAgentSpace#aws_resources}

---

##### `codeReviewSettings`<sup>Optional</sup> <a name="codeReviewSettings" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.codeReviewSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a>

Details of code review settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#code_review_settings SecurityagentAgentSpace#code_review_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#description SecurityagentAgentSpace#description}

---

##### `integratedResources`<sup>Optional</sup> <a name="integratedResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.integratedResources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>>

Integrated Resources configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#integrated_resources SecurityagentAgentSpace#integrated_resources}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Identifier of the KMS key used to encrypt data.

Can be a key ID, key ARN, alias name, or alias ARN. If not specified, an AWS managed key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#kms_key_id SecurityagentAgentSpace#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>>

Tags for the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#tags SecurityagentAgentSpace#tags}

---

##### `targetDomainIds`<sup>Optional</sup> <a name="targetDomainIds" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.Initializer.parameter.targetDomainIds"></a>

- *Type:* java.util.List<java.lang.String>

List of target domain identifiers registered with the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#target_domain_ids SecurityagentAgentSpace#target_domain_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putAwsResources">putAwsResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putCodeReviewSettings">putCodeReviewSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putIntegratedResources">putIntegratedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetAwsResources">resetAwsResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetCodeReviewSettings">resetCodeReviewSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetIntegratedResources">resetIntegratedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetTargetDomainIds">resetTargetDomainIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsResources` <a name="putAwsResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putAwsResources"></a>

```java
public void putAwsResources(SecurityagentAgentSpaceAwsResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putAwsResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a>

---

##### `putCodeReviewSettings` <a name="putCodeReviewSettings" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putCodeReviewSettings"></a>

```java
public void putCodeReviewSettings(SecurityagentAgentSpaceCodeReviewSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putCodeReviewSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a>

---

##### `putIntegratedResources` <a name="putIntegratedResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putIntegratedResources"></a>

```java
public void putIntegratedResources(IResolvable|java.util.List<SecurityagentAgentSpaceIntegratedResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putIntegratedResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SecurityagentAgentSpaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>>

---

##### `resetAwsResources` <a name="resetAwsResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetAwsResources"></a>

```java
public void resetAwsResources()
```

##### `resetCodeReviewSettings` <a name="resetCodeReviewSettings" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetCodeReviewSettings"></a>

```java
public void resetCodeReviewSettings()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIntegratedResources` <a name="resetIntegratedResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetIntegratedResources"></a>

```java
public void resetIntegratedResources()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetDomainIds` <a name="resetTargetDomainIds" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.resetTargetDomainIds"></a>

```java
public void resetTargetDomainIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpace;

SecurityagentAgentSpace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpace;

SecurityagentAgentSpace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpace;

SecurityagentAgentSpace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpace;

SecurityagentAgentSpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityagentAgentSpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityagentAgentSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.agentSpaceId">agentSpaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.awsResources">awsResources</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference">SecurityagentAgentSpaceAwsResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.codeReviewSettings">codeReviewSettings</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference">SecurityagentAgentSpaceCodeReviewSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.integratedResources">integratedResources</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList">SecurityagentAgentSpaceIntegratedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList">SecurityagentAgentSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.awsResourcesInput">awsResourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.codeReviewSettingsInput">codeReviewSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.integratedResourcesInput">integratedResourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.targetDomainIdsInput">targetDomainIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.targetDomainIds">targetDomainIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.agentSpaceId"></a>

```java
public java.lang.String getAgentSpaceId();
```

- *Type:* java.lang.String

---

##### `awsResources`<sup>Required</sup> <a name="awsResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.awsResources"></a>

```java
public SecurityagentAgentSpaceAwsResourcesOutputReference getAwsResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference">SecurityagentAgentSpaceAwsResourcesOutputReference</a>

---

##### `codeReviewSettings`<sup>Required</sup> <a name="codeReviewSettings" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.codeReviewSettings"></a>

```java
public SecurityagentAgentSpaceCodeReviewSettingsOutputReference getCodeReviewSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference">SecurityagentAgentSpaceCodeReviewSettingsOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integratedResources`<sup>Required</sup> <a name="integratedResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.integratedResources"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesList getIntegratedResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList">SecurityagentAgentSpaceIntegratedResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tags"></a>

```java
public SecurityagentAgentSpaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList">SecurityagentAgentSpaceTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `awsResourcesInput`<sup>Optional</sup> <a name="awsResourcesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.awsResourcesInput"></a>

```java
public IResolvable|SecurityagentAgentSpaceAwsResources getAwsResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a>

---

##### `codeReviewSettingsInput`<sup>Optional</sup> <a name="codeReviewSettingsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.codeReviewSettingsInput"></a>

```java
public IResolvable|SecurityagentAgentSpaceCodeReviewSettings getCodeReviewSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `integratedResourcesInput`<sup>Optional</sup> <a name="integratedResourcesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.integratedResourcesInput"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceIntegratedResources> getIntegratedResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>>

---

##### `targetDomainIdsInput`<sup>Optional</sup> <a name="targetDomainIdsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.targetDomainIdsInput"></a>

```java
public java.util.List<java.lang.String> getTargetDomainIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `targetDomainIds`<sup>Required</sup> <a name="targetDomainIds" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.targetDomainIds"></a>

```java
public java.util.List<java.lang.String> getTargetDomainIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentAgentSpaceAwsResources <a name="SecurityagentAgentSpaceAwsResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceAwsResources;

SecurityagentAgentSpaceAwsResources.builder()
//  .iamRoles(java.util.List<java.lang.String>)
//  .lambdaFunctionArns(java.util.List<java.lang.String>)
//  .logGroups(java.util.List<java.lang.String>)
//  .s3Buckets(java.util.List<java.lang.String>)
//  .secretArns(java.util.List<java.lang.String>)
//  .vpcs(IResolvable|java.util.List<SecurityagentAgentSpaceAwsResourcesVpcs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | IAM role ARNs. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.lambdaFunctionArns">lambdaFunctionArns</a></code> | <code>java.util.List<java.lang.String></code> | Lambda function ARNs used to retrieve tester credentials for pentests. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.logGroups">logGroups</a></code> | <code>java.util.List<java.lang.String></code> | CloudWatch log group ARNs. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.s3Buckets">s3Buckets</a></code> | <code>java.util.List<java.lang.String></code> | S3 bucket ARNs. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.secretArns">secretArns</a></code> | <code>java.util.List<java.lang.String></code> | SecretsManager secret ARNs used to store tester credentials for pentests. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.vpcs">vpcs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>></code> | VPC configurations. |

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

IAM role ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#iam_roles SecurityagentAgentSpace#iam_roles}

---

##### `lambdaFunctionArns`<sup>Optional</sup> <a name="lambdaFunctionArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.lambdaFunctionArns"></a>

```java
public java.util.List<java.lang.String> getLambdaFunctionArns();
```

- *Type:* java.util.List<java.lang.String>

Lambda function ARNs used to retrieve tester credentials for pentests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#lambda_function_arns SecurityagentAgentSpace#lambda_function_arns}

---

##### `logGroups`<sup>Optional</sup> <a name="logGroups" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.logGroups"></a>

```java
public java.util.List<java.lang.String> getLogGroups();
```

- *Type:* java.util.List<java.lang.String>

CloudWatch log group ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#log_groups SecurityagentAgentSpace#log_groups}

---

##### `s3Buckets`<sup>Optional</sup> <a name="s3Buckets" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.s3Buckets"></a>

```java
public java.util.List<java.lang.String> getS3Buckets();
```

- *Type:* java.util.List<java.lang.String>

S3 bucket ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#s3_buckets SecurityagentAgentSpace#s3_buckets}

---

##### `secretArns`<sup>Optional</sup> <a name="secretArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.secretArns"></a>

```java
public java.util.List<java.lang.String> getSecretArns();
```

- *Type:* java.util.List<java.lang.String>

SecretsManager secret ARNs used to store tester credentials for pentests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#secret_arns SecurityagentAgentSpace#secret_arns}

---

##### `vpcs`<sup>Optional</sup> <a name="vpcs" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources.property.vpcs"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceAwsResourcesVpcs> getVpcs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>>

VPC configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#vpcs SecurityagentAgentSpace#vpcs}

---

### SecurityagentAgentSpaceAwsResourcesVpcs <a name="SecurityagentAgentSpaceAwsResourcesVpcs" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceAwsResourcesVpcs;

SecurityagentAgentSpaceAwsResourcesVpcs.builder()
//  .securityGroupArns(java.util.List<java.lang.String>)
//  .subnetArns(java.util.List<java.lang.String>)
//  .vpcArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.securityGroupArns">securityGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | List of security group ARNs in the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.subnetArns">subnetArns</a></code> | <code>java.util.List<java.lang.String></code> | List of subnet ARNs in the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.vpcArn">vpcArn</a></code> | <code>java.lang.String</code> | ARN of the customer VPC. |

---

##### `securityGroupArns`<sup>Optional</sup> <a name="securityGroupArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.securityGroupArns"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArns();
```

- *Type:* java.util.List<java.lang.String>

List of security group ARNs in the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#security_group_arns SecurityagentAgentSpace#security_group_arns}

---

##### `subnetArns`<sup>Optional</sup> <a name="subnetArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.subnetArns"></a>

```java
public java.util.List<java.lang.String> getSubnetArns();
```

- *Type:* java.util.List<java.lang.String>

List of subnet ARNs in the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#subnet_arns SecurityagentAgentSpace#subnet_arns}

---

##### `vpcArn`<sup>Optional</sup> <a name="vpcArn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs.property.vpcArn"></a>

```java
public java.lang.String getVpcArn();
```

- *Type:* java.lang.String

ARN of the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#vpc_arn SecurityagentAgentSpace#vpc_arn}

---

### SecurityagentAgentSpaceCodeReviewSettings <a name="SecurityagentAgentSpaceCodeReviewSettings" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceCodeReviewSettings;

SecurityagentAgentSpaceCodeReviewSettings.builder()
//  .controlsScanning(java.lang.Boolean|IResolvable)
//  .generalPurposeScanning(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings.property.controlsScanning">controlsScanning</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Controls are utilized for code review analysis. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings.property.generalPurposeScanning">generalPurposeScanning</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether general purpose analysis is performed for code review. |

---

##### `controlsScanning`<sup>Optional</sup> <a name="controlsScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings.property.controlsScanning"></a>

```java
public java.lang.Boolean|IResolvable getControlsScanning();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Controls are utilized for code review analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#controls_scanning SecurityagentAgentSpace#controls_scanning}

---

##### `generalPurposeScanning`<sup>Optional</sup> <a name="generalPurposeScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings.property.generalPurposeScanning"></a>

```java
public java.lang.Boolean|IResolvable getGeneralPurposeScanning();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether general purpose analysis is performed for code review.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#general_purpose_scanning SecurityagentAgentSpace#general_purpose_scanning}

---

### SecurityagentAgentSpaceConfig <a name="SecurityagentAgentSpaceConfig" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceConfig;

SecurityagentAgentSpaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .awsResources(SecurityagentAgentSpaceAwsResources)
//  .codeReviewSettings(SecurityagentAgentSpaceCodeReviewSettings)
//  .description(java.lang.String)
//  .integratedResources(IResolvable|java.util.List<SecurityagentAgentSpaceIntegratedResources>)
//  .kmsKeyId(java.lang.String)
//  .tags(IResolvable|java.util.List<SecurityagentAgentSpaceTags>)
//  .targetDomainIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the agent space. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.awsResources">awsResources</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a></code> | AWS resource configuration. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.codeReviewSettings">codeReviewSettings</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a></code> | Details of code review settings. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the agent space. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.integratedResources">integratedResources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>></code> | Integrated Resources configuration. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Identifier of the KMS key used to encrypt data. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>></code> | Tags for the agent space. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.targetDomainIds">targetDomainIds</a></code> | <code>java.util.List<java.lang.String></code> | List of target domain identifiers registered with the agent space. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#name SecurityagentAgentSpace#name}

---

##### `awsResources`<sup>Optional</sup> <a name="awsResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.awsResources"></a>

```java
public SecurityagentAgentSpaceAwsResources getAwsResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a>

AWS resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#aws_resources SecurityagentAgentSpace#aws_resources}

---

##### `codeReviewSettings`<sup>Optional</sup> <a name="codeReviewSettings" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.codeReviewSettings"></a>

```java
public SecurityagentAgentSpaceCodeReviewSettings getCodeReviewSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a>

Details of code review settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#code_review_settings SecurityagentAgentSpace#code_review_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#description SecurityagentAgentSpace#description}

---

##### `integratedResources`<sup>Optional</sup> <a name="integratedResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.integratedResources"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceIntegratedResources> getIntegratedResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>>

Integrated Resources configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#integrated_resources SecurityagentAgentSpace#integrated_resources}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Identifier of the KMS key used to encrypt data.

Can be a key ID, key ARN, alias name, or alias ARN. If not specified, an AWS managed key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#kms_key_id SecurityagentAgentSpace#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>>

Tags for the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#tags SecurityagentAgentSpace#tags}

---

##### `targetDomainIds`<sup>Optional</sup> <a name="targetDomainIds" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceConfig.property.targetDomainIds"></a>

```java
public java.util.List<java.lang.String> getTargetDomainIds();
```

- *Type:* java.util.List<java.lang.String>

List of target domain identifiers registered with the agent space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#target_domain_ids SecurityagentAgentSpace#target_domain_ids}

---

### SecurityagentAgentSpaceIntegratedResources <a name="SecurityagentAgentSpaceIntegratedResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResources;

SecurityagentAgentSpaceIntegratedResources.builder()
//  .integration(java.lang.String)
//  .providerResources(IResolvable|java.util.List<SecurityagentAgentSpaceIntegratedResourcesProviderResources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources.property.integration">integration</a></code> | <code>java.lang.String</code> | Unique identifier of the Provider Integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources.property.providerResources">providerResources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>></code> | List of selected Resources from the Integration. |

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources.property.integration"></a>

```java
public java.lang.String getIntegration();
```

- *Type:* java.lang.String

Unique identifier of the Provider Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#integration SecurityagentAgentSpace#integration}

---

##### `providerResources`<sup>Optional</sup> <a name="providerResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources.property.providerResources"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceIntegratedResourcesProviderResources> getProviderResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>>

List of selected Resources from the Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#provider_resources SecurityagentAgentSpace#provider_resources}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResources <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResources;

SecurityagentAgentSpaceIntegratedResourcesProviderResources.builder()
//  .bitbucketCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities)
//  .bitbucketRepository(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository)
//  .confluenceCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities)
//  .confluenceDocument(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument)
//  .gitHubCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities)
//  .gitHubRepository(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository)
//  .gitLabCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities)
//  .gitLabRepository(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.bitbucketCapabilities">bitbucketCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a></code> | Bitbucket repository capabilities. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.bitbucketRepository">bitbucketRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a></code> | Bitbucket repository details. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.confluenceCapabilities">confluenceCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a></code> | Confluence document capabilities. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.confluenceDocument">confluenceDocument</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a></code> | Confluence document details. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitHubCapabilities">gitHubCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a></code> | GitHub repository capabilities. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitHubRepository">gitHubRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a></code> | GitHub repository details. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitLabCapabilities">gitLabCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a></code> | GitLab repository capabilities. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitLabRepository">gitLabRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a></code> | GitLab repository details. |

---

##### `bitbucketCapabilities`<sup>Optional</sup> <a name="bitbucketCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.bitbucketCapabilities"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities getBitbucketCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

Bitbucket repository capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#bitbucket_capabilities SecurityagentAgentSpace#bitbucket_capabilities}

---

##### `bitbucketRepository`<sup>Optional</sup> <a name="bitbucketRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.bitbucketRepository"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository getBitbucketRepository();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

Bitbucket repository details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#bitbucket_repository SecurityagentAgentSpace#bitbucket_repository}

---

##### `confluenceCapabilities`<sup>Optional</sup> <a name="confluenceCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.confluenceCapabilities"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities getConfluenceCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

Confluence document capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#confluence_capabilities SecurityagentAgentSpace#confluence_capabilities}

---

##### `confluenceDocument`<sup>Optional</sup> <a name="confluenceDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.confluenceDocument"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument getConfluenceDocument();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

Confluence document details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#confluence_document SecurityagentAgentSpace#confluence_document}

---

##### `gitHubCapabilities`<sup>Optional</sup> <a name="gitHubCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitHubCapabilities"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities getGitHubCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

GitHub repository capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#git_hub_capabilities SecurityagentAgentSpace#git_hub_capabilities}

---

##### `gitHubRepository`<sup>Optional</sup> <a name="gitHubRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitHubRepository"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository getGitHubRepository();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

GitHub repository details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#git_hub_repository SecurityagentAgentSpace#git_hub_repository}

---

##### `gitLabCapabilities`<sup>Optional</sup> <a name="gitLabCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitLabCapabilities"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities getGitLabCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

GitLab repository capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#git_lab_capabilities SecurityagentAgentSpace#git_lab_capabilities}

---

##### `gitLabRepository`<sup>Optional</sup> <a name="gitLabRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources.property.gitLabRepository"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository getGitLabRepository();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

GitLab repository details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#git_lab_repository SecurityagentAgentSpace#git_lab_repository}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities;

SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.builder()
//  .leaveComments(java.lang.Boolean|IResolvable)
//  .remediateCode(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.property.leaveComments">leaveComments</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables Code Review in the repository. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.property.remediateCode">remediateCode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables creation of pull requests with automated fixes. |

---

##### `leaveComments`<sup>Optional</sup> <a name="leaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.property.leaveComments"></a>

```java
public java.lang.Boolean|IResolvable getLeaveComments();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables Code Review in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#leave_comments SecurityagentAgentSpace#leave_comments}

---

##### `remediateCode`<sup>Optional</sup> <a name="remediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.property.remediateCode"></a>

```java
public java.lang.Boolean|IResolvable getRemediateCode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables creation of pull requests with automated fixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#remediate_code SecurityagentAgentSpace#remediate_code}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository;

SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.builder()
//  .name(java.lang.String)
//  .workspace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.property.name">name</a></code> | <code>java.lang.String</code> | Bitbucket repository name. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.property.workspace">workspace</a></code> | <code>java.lang.String</code> | Bitbucket workspace slug owning the repository. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Bitbucket repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#name SecurityagentAgentSpace#name}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.property.workspace"></a>

```java
public java.lang.String getWorkspace();
```

- *Type:* java.lang.String

Bitbucket workspace slug owning the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#workspace SecurityagentAgentSpace#workspace}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities;

SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.builder()
//  .createDocument(java.lang.Boolean|IResolvable)
//  .fetchDocument(java.lang.Boolean|IResolvable)
//  .updateDocument(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.createDocument">createDocument</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables creation of new Confluence documents in the same space. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.fetchDocument">fetchDocument</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables read access to the document content. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.updateDocument">updateDocument</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables updates to the document. |

---

##### `createDocument`<sup>Optional</sup> <a name="createDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.createDocument"></a>

```java
public java.lang.Boolean|IResolvable getCreateDocument();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables creation of new Confluence documents in the same space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#create_document SecurityagentAgentSpace#create_document}

---

##### `fetchDocument`<sup>Optional</sup> <a name="fetchDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.fetchDocument"></a>

```java
public java.lang.Boolean|IResolvable getFetchDocument();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables read access to the document content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#fetch_document SecurityagentAgentSpace#fetch_document}

---

##### `updateDocument`<sup>Optional</sup> <a name="updateDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.property.updateDocument"></a>

```java
public java.lang.Boolean|IResolvable getUpdateDocument();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables updates to the document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#update_document SecurityagentAgentSpace#update_document}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument;

SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.builder()
//  .name(java.lang.String)
//  .pageId(java.lang.String)
//  .spaceKey(java.lang.String)
//  .spaceTitle(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.name">name</a></code> | <code>java.lang.String</code> | Customer-supplied logical name for the Confluence document. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.pageId">pageId</a></code> | <code>java.lang.String</code> | Confluence page identifier. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.spaceKey">spaceKey</a></code> | <code>java.lang.String</code> | Confluence space key containing the document. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.spaceTitle">spaceTitle</a></code> | <code>java.lang.String</code> | Read-only human-readable title of the containing space, populated from service-side metadata. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.title">title</a></code> | <code>java.lang.String</code> | Read-only human-readable title of the page, populated from service-side metadata. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Customer-supplied logical name for the Confluence document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#name SecurityagentAgentSpace#name}

---

##### `pageId`<sup>Optional</sup> <a name="pageId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

Confluence page identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#page_id SecurityagentAgentSpace#page_id}

---

##### `spaceKey`<sup>Optional</sup> <a name="spaceKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.spaceKey"></a>

```java
public java.lang.String getSpaceKey();
```

- *Type:* java.lang.String

Confluence space key containing the document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#space_key SecurityagentAgentSpace#space_key}

---

##### `spaceTitle`<sup>Optional</sup> <a name="spaceTitle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.spaceTitle"></a>

```java
public java.lang.String getSpaceTitle();
```

- *Type:* java.lang.String

Read-only human-readable title of the containing space, populated from service-side metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#space_title SecurityagentAgentSpace#space_title}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Read-only human-readable title of the page, populated from service-side metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#title SecurityagentAgentSpace#title}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities;

SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.builder()
//  .leaveComments(java.lang.Boolean|IResolvable)
//  .remediateCode(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.property.leaveComments">leaveComments</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables Code Review in the repository. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.property.remediateCode">remediateCode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables creation of pull requests with automated fixes. |

---

##### `leaveComments`<sup>Optional</sup> <a name="leaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.property.leaveComments"></a>

```java
public java.lang.Boolean|IResolvable getLeaveComments();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables Code Review in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#leave_comments SecurityagentAgentSpace#leave_comments}

---

##### `remediateCode`<sup>Optional</sup> <a name="remediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.property.remediateCode"></a>

```java
public java.lang.Boolean|IResolvable getRemediateCode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables creation of pull requests with automated fixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#remediate_code SecurityagentAgentSpace#remediate_code}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository;

SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.builder()
//  .name(java.lang.String)
//  .owner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.property.name">name</a></code> | <code>java.lang.String</code> | GitHub repository name. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.property.owner">owner</a></code> | <code>java.lang.String</code> | GitHub repository owner (user or organization). |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#name SecurityagentAgentSpace#name}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

GitHub repository owner (user or organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#owner SecurityagentAgentSpace#owner}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities;

SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.builder()
//  .leaveComments(java.lang.Boolean|IResolvable)
//  .remediateCode(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.property.leaveComments">leaveComments</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables Code Review in the repository. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.property.remediateCode">remediateCode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables creation of merge requests with automated fixes. |

---

##### `leaveComments`<sup>Optional</sup> <a name="leaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.property.leaveComments"></a>

```java
public java.lang.Boolean|IResolvable getLeaveComments();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables Code Review in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#leave_comments SecurityagentAgentSpace#leave_comments}

---

##### `remediateCode`<sup>Optional</sup> <a name="remediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.property.remediateCode"></a>

```java
public java.lang.Boolean|IResolvable getRemediateCode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables creation of merge requests with automated fixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#remediate_code SecurityagentAgentSpace#remediate_code}

---

### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository;

SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.property.name">name</a></code> | <code>java.lang.String</code> | GitLab project name. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.property.namespace">namespace</a></code> | <code>java.lang.String</code> | GitLab project namespace (user, group, or subgroup path). |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

GitLab project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#name SecurityagentAgentSpace#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

GitLab project namespace (user, group, or subgroup path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#namespace SecurityagentAgentSpace#namespace}

---

### SecurityagentAgentSpaceTags <a name="SecurityagentAgentSpaceTags" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceTags;

SecurityagentAgentSpaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#key SecurityagentAgentSpace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#value SecurityagentAgentSpace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentAgentSpaceAwsResourcesOutputReference <a name="SecurityagentAgentSpaceAwsResourcesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceAwsResourcesOutputReference;

new SecurityagentAgentSpaceAwsResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.putVpcs">putVpcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetLambdaFunctionArns">resetLambdaFunctionArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetLogGroups">resetLogGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetS3Buckets">resetS3Buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetSecretArns">resetSecretArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetVpcs">resetVpcs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcs` <a name="putVpcs" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.putVpcs"></a>

```java
public void putVpcs(IResolvable|java.util.List<SecurityagentAgentSpaceAwsResourcesVpcs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.putVpcs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>>

---

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetIamRoles"></a>

```java
public void resetIamRoles()
```

##### `resetLambdaFunctionArns` <a name="resetLambdaFunctionArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetLambdaFunctionArns"></a>

```java
public void resetLambdaFunctionArns()
```

##### `resetLogGroups` <a name="resetLogGroups" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetLogGroups"></a>

```java
public void resetLogGroups()
```

##### `resetS3Buckets` <a name="resetS3Buckets" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetS3Buckets"></a>

```java
public void resetS3Buckets()
```

##### `resetSecretArns` <a name="resetSecretArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetSecretArns"></a>

```java
public void resetSecretArns()
```

##### `resetVpcs` <a name="resetVpcs" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.resetVpcs"></a>

```java
public void resetVpcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs">vpcs</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList">SecurityagentAgentSpaceAwsResourcesVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRolesInput">iamRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArnsInput">lambdaFunctionArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroupsInput">logGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.s3BucketsInput">s3BucketsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArnsInput">secretArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcsInput">vpcsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns">lambdaFunctionArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups">logGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets">s3Buckets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns">secretArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs"></a>

```java
public SecurityagentAgentSpaceAwsResourcesVpcsList getVpcs();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList">SecurityagentAgentSpaceAwsResourcesVpcsList</a>

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRolesInput"></a>

```java
public java.util.List<java.lang.String> getIamRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lambdaFunctionArnsInput`<sup>Optional</sup> <a name="lambdaFunctionArnsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArnsInput"></a>

```java
public java.util.List<java.lang.String> getLambdaFunctionArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logGroupsInput`<sup>Optional</sup> <a name="logGroupsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroupsInput"></a>

```java
public java.util.List<java.lang.String> getLogGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3BucketsInput`<sup>Optional</sup> <a name="s3BucketsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.s3BucketsInput"></a>

```java
public java.util.List<java.lang.String> getS3BucketsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretArnsInput`<sup>Optional</sup> <a name="secretArnsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArnsInput"></a>

```java
public java.util.List<java.lang.String> getSecretArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcsInput`<sup>Optional</sup> <a name="vpcsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcsInput"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceAwsResourcesVpcs> getVpcsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>>

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lambdaFunctionArns`<sup>Required</sup> <a name="lambdaFunctionArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns"></a>

```java
public java.util.List<java.lang.String> getLambdaFunctionArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logGroups`<sup>Required</sup> <a name="logGroups" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups"></a>

```java
public java.util.List<java.lang.String> getLogGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3Buckets`<sup>Required</sup> <a name="s3Buckets" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets"></a>

```java
public java.util.List<java.lang.String> getS3Buckets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretArns`<sup>Required</sup> <a name="secretArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns"></a>

```java
public java.util.List<java.lang.String> getSecretArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceAwsResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResources">SecurityagentAgentSpaceAwsResources</a>

---


### SecurityagentAgentSpaceAwsResourcesVpcsList <a name="SecurityagentAgentSpaceAwsResourcesVpcsList" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceAwsResourcesVpcsList;

new SecurityagentAgentSpaceAwsResourcesVpcsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.get"></a>

```java
public SecurityagentAgentSpaceAwsResourcesVpcsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceAwsResourcesVpcs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>>

---


### SecurityagentAgentSpaceAwsResourcesVpcsOutputReference <a name="SecurityagentAgentSpaceAwsResourcesVpcsOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference;

new SecurityagentAgentSpaceAwsResourcesVpcsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetSecurityGroupArns">resetSecurityGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetSubnetArns">resetSubnetArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetVpcArn">resetVpcArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupArns` <a name="resetSecurityGroupArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetSecurityGroupArns"></a>

```java
public void resetSecurityGroupArns()
```

##### `resetSubnetArns` <a name="resetSubnetArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetSubnetArns"></a>

```java
public void resetSubnetArns()
```

##### `resetVpcArn` <a name="resetVpcArn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resetVpcArn"></a>

```java
public void resetVpcArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArnsInput">securityGroupArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArnsInput">subnetArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArnInput">vpcArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns">securityGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns">subnetArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn">vpcArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupArnsInput`<sup>Optional</sup> <a name="securityGroupArnsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArnsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetArnsInput`<sup>Optional</sup> <a name="subnetArnsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArnsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcArnInput`<sup>Optional</sup> <a name="vpcArnInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArnInput"></a>

```java
public java.lang.String getVpcArnInput();
```

- *Type:* java.lang.String

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetArns`<sup>Required</sup> <a name="subnetArns" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns"></a>

```java
public java.util.List<java.lang.String> getSubnetArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcArn`<sup>Required</sup> <a name="vpcArn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn"></a>

```java
public java.lang.String getVpcArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceAwsResourcesVpcs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceAwsResourcesVpcs">SecurityagentAgentSpaceAwsResourcesVpcs</a>

---


### SecurityagentAgentSpaceCodeReviewSettingsOutputReference <a name="SecurityagentAgentSpaceCodeReviewSettingsOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceCodeReviewSettingsOutputReference;

new SecurityagentAgentSpaceCodeReviewSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resetControlsScanning">resetControlsScanning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resetGeneralPurposeScanning">resetGeneralPurposeScanning</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlsScanning` <a name="resetControlsScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resetControlsScanning"></a>

```java
public void resetControlsScanning()
```

##### `resetGeneralPurposeScanning` <a name="resetGeneralPurposeScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.resetGeneralPurposeScanning"></a>

```java
public void resetGeneralPurposeScanning()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanningInput">controlsScanningInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanningInput">generalPurposeScanningInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning">controlsScanning</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning">generalPurposeScanning</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlsScanningInput`<sup>Optional</sup> <a name="controlsScanningInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanningInput"></a>

```java
public java.lang.Boolean|IResolvable getControlsScanningInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `generalPurposeScanningInput`<sup>Optional</sup> <a name="generalPurposeScanningInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanningInput"></a>

```java
public java.lang.Boolean|IResolvable getGeneralPurposeScanningInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `controlsScanning`<sup>Required</sup> <a name="controlsScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning"></a>

```java
public java.lang.Boolean|IResolvable getControlsScanning();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `generalPurposeScanning`<sup>Required</sup> <a name="generalPurposeScanning" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning"></a>

```java
public java.lang.Boolean|IResolvable getGeneralPurposeScanning();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceCodeReviewSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceCodeReviewSettings">SecurityagentAgentSpaceCodeReviewSettings</a>

---


### SecurityagentAgentSpaceIntegratedResourcesList <a name="SecurityagentAgentSpaceIntegratedResourcesList" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesList;

new SecurityagentAgentSpaceIntegratedResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.get"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceIntegratedResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>>

---


### SecurityagentAgentSpaceIntegratedResourcesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesOutputReference;

new SecurityagentAgentSpaceIntegratedResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.putProviderResources">putProviderResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resetIntegration">resetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resetProviderResources">resetProviderResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderResources` <a name="putProviderResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.putProviderResources"></a>

```java
public void putProviderResources(IResolvable|java.util.List<SecurityagentAgentSpaceIntegratedResourcesProviderResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.putProviderResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>>

---

##### `resetIntegration` <a name="resetIntegration" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resetIntegration"></a>

```java
public void resetIntegration()
```

##### `resetProviderResources` <a name="resetProviderResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.resetProviderResources"></a>

```java
public void resetProviderResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources">providerResources</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integrationInput">integrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResourcesInput">providerResourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration">integration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `providerResources`<sup>Required</sup> <a name="providerResources" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList getProviderResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a>

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integrationInput"></a>

```java
public java.lang.String getIntegrationInput();
```

- *Type:* java.lang.String

---

##### `providerResourcesInput`<sup>Optional</sup> <a name="providerResourcesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResourcesInput"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceIntegratedResourcesProviderResources> getProviderResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>>

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration"></a>

```java
public java.lang.String getIntegration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResources">SecurityagentAgentSpaceIntegratedResources</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resetLeaveComments">resetLeaveComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resetRemediateCode">resetRemediateCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLeaveComments` <a name="resetLeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resetLeaveComments"></a>

```java
public void resetLeaveComments()
```

##### `resetRemediateCode` <a name="resetRemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resetRemediateCode"></a>

```java
public void resetRemediateCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveCommentsInput">leaveCommentsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCodeInput">remediateCodeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments">leaveComments</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode">remediateCode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `leaveCommentsInput`<sup>Optional</sup> <a name="leaveCommentsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveCommentsInput"></a>

```java
public java.lang.Boolean|IResolvable getLeaveCommentsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `remediateCodeInput`<sup>Optional</sup> <a name="remediateCodeInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCodeInput"></a>

```java
public java.lang.Boolean|IResolvable getRemediateCodeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `leaveComments`<sup>Required</sup> <a name="leaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments"></a>

```java
public java.lang.Boolean|IResolvable getLeaveComments();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `remediateCode`<sup>Required</sup> <a name="remediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode"></a>

```java
public java.lang.Boolean|IResolvable getRemediateCode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resetWorkspace">resetWorkspace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetWorkspace` <a name="resetWorkspace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resetWorkspace"></a>

```java
public void resetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspaceInput">workspaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace">workspace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspaceInput"></a>

```java
public java.lang.String getWorkspaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace"></a>

```java
public java.lang.String getWorkspace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetCreateDocument">resetCreateDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetFetchDocument">resetFetchDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetUpdateDocument">resetUpdateDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreateDocument` <a name="resetCreateDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetCreateDocument"></a>

```java
public void resetCreateDocument()
```

##### `resetFetchDocument` <a name="resetFetchDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetFetchDocument"></a>

```java
public void resetFetchDocument()
```

##### `resetUpdateDocument` <a name="resetUpdateDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resetUpdateDocument"></a>

```java
public void resetUpdateDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocumentInput">createDocumentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocumentInput">fetchDocumentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocumentInput">updateDocumentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument">createDocument</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument">fetchDocument</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument">updateDocument</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createDocumentInput`<sup>Optional</sup> <a name="createDocumentInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocumentInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateDocumentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fetchDocumentInput`<sup>Optional</sup> <a name="fetchDocumentInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocumentInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchDocumentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `updateDocumentInput`<sup>Optional</sup> <a name="updateDocumentInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocumentInput"></a>

```java
public java.lang.Boolean|IResolvable getUpdateDocumentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createDocument`<sup>Required</sup> <a name="createDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument"></a>

```java
public java.lang.Boolean|IResolvable getCreateDocument();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fetchDocument`<sup>Required</sup> <a name="fetchDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument"></a>

```java
public java.lang.Boolean|IResolvable getFetchDocument();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `updateDocument`<sup>Required</sup> <a name="updateDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument"></a>

```java
public java.lang.Boolean|IResolvable getUpdateDocument();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetPageId">resetPageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetSpaceKey">resetSpaceKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetSpaceTitle">resetSpaceTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPageId` <a name="resetPageId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetPageId"></a>

```java
public void resetPageId()
```

##### `resetSpaceKey` <a name="resetSpaceKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetSpaceKey"></a>

```java
public void resetSpaceKey()
```

##### `resetSpaceTitle` <a name="resetSpaceTitle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetSpaceTitle"></a>

```java
public void resetSpaceTitle()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageIdInput">pageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKeyInput">spaceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitleInput">spaceTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId">pageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey">spaceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle">spaceTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pageIdInput`<sup>Optional</sup> <a name="pageIdInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageIdInput"></a>

```java
public java.lang.String getPageIdInput();
```

- *Type:* java.lang.String

---

##### `spaceKeyInput`<sup>Optional</sup> <a name="spaceKeyInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKeyInput"></a>

```java
public java.lang.String getSpaceKeyInput();
```

- *Type:* java.lang.String

---

##### `spaceTitleInput`<sup>Optional</sup> <a name="spaceTitleInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitleInput"></a>

```java
public java.lang.String getSpaceTitleInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

---

##### `spaceKey`<sup>Required</sup> <a name="spaceKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey"></a>

```java
public java.lang.String getSpaceKey();
```

- *Type:* java.lang.String

---

##### `spaceTitle`<sup>Required</sup> <a name="spaceTitle" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle"></a>

```java
public java.lang.String getSpaceTitle();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resetLeaveComments">resetLeaveComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resetRemediateCode">resetRemediateCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLeaveComments` <a name="resetLeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resetLeaveComments"></a>

```java
public void resetLeaveComments()
```

##### `resetRemediateCode` <a name="resetRemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resetRemediateCode"></a>

```java
public void resetRemediateCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveCommentsInput">leaveCommentsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCodeInput">remediateCodeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments">leaveComments</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode">remediateCode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `leaveCommentsInput`<sup>Optional</sup> <a name="leaveCommentsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveCommentsInput"></a>

```java
public java.lang.Boolean|IResolvable getLeaveCommentsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `remediateCodeInput`<sup>Optional</sup> <a name="remediateCodeInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCodeInput"></a>

```java
public java.lang.Boolean|IResolvable getRemediateCodeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `leaveComments`<sup>Required</sup> <a name="leaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments"></a>

```java
public java.lang.Boolean|IResolvable getLeaveComments();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `remediateCode`<sup>Required</sup> <a name="remediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode"></a>

```java
public java.lang.Boolean|IResolvable getRemediateCode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resetOwner">resetOwner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resetOwner"></a>

```java
public void resetOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resetLeaveComments">resetLeaveComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resetRemediateCode">resetRemediateCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLeaveComments` <a name="resetLeaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resetLeaveComments"></a>

```java
public void resetLeaveComments()
```

##### `resetRemediateCode` <a name="resetRemediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resetRemediateCode"></a>

```java
public void resetRemediateCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveCommentsInput">leaveCommentsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCodeInput">remediateCodeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments">leaveComments</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode">remediateCode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `leaveCommentsInput`<sup>Optional</sup> <a name="leaveCommentsInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveCommentsInput"></a>

```java
public java.lang.Boolean|IResolvable getLeaveCommentsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `remediateCodeInput`<sup>Optional</sup> <a name="remediateCodeInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCodeInput"></a>

```java
public java.lang.Boolean|IResolvable getRemediateCodeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `leaveComments`<sup>Required</sup> <a name="leaveComments" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments"></a>

```java
public java.lang.Boolean|IResolvable getLeaveComments();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `remediateCode`<sup>Required</sup> <a name="remediateCode" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode"></a>

```java
public java.lang.Boolean|IResolvable getRemediateCode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceIntegratedResourcesProviderResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>>

---


### SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference <a name="SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference;

new SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketCapabilities">putBitbucketCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketRepository">putBitbucketRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceCapabilities">putConfluenceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceDocument">putConfluenceDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubCapabilities">putGitHubCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubRepository">putGitHubRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabCapabilities">putGitLabCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabRepository">putGitLabRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetBitbucketCapabilities">resetBitbucketCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetBitbucketRepository">resetBitbucketRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetConfluenceCapabilities">resetConfluenceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetConfluenceDocument">resetConfluenceDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitHubCapabilities">resetGitHubCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitHubRepository">resetGitHubRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitLabCapabilities">resetGitLabCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitLabRepository">resetGitLabRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBitbucketCapabilities` <a name="putBitbucketCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketCapabilities"></a>

```java
public void putBitbucketCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

---

##### `putBitbucketRepository` <a name="putBitbucketRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketRepository"></a>

```java
public void putBitbucketRepository(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putBitbucketRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

---

##### `putConfluenceCapabilities` <a name="putConfluenceCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceCapabilities"></a>

```java
public void putConfluenceCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

---

##### `putConfluenceDocument` <a name="putConfluenceDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceDocument"></a>

```java
public void putConfluenceDocument(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putConfluenceDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

---

##### `putGitHubCapabilities` <a name="putGitHubCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubCapabilities"></a>

```java
public void putGitHubCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

---

##### `putGitHubRepository` <a name="putGitHubRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubRepository"></a>

```java
public void putGitHubRepository(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitHubRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

---

##### `putGitLabCapabilities` <a name="putGitLabCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabCapabilities"></a>

```java
public void putGitLabCapabilities(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

---

##### `putGitLabRepository` <a name="putGitLabRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabRepository"></a>

```java
public void putGitLabRepository(SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.putGitLabRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

---

##### `resetBitbucketCapabilities` <a name="resetBitbucketCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetBitbucketCapabilities"></a>

```java
public void resetBitbucketCapabilities()
```

##### `resetBitbucketRepository` <a name="resetBitbucketRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetBitbucketRepository"></a>

```java
public void resetBitbucketRepository()
```

##### `resetConfluenceCapabilities` <a name="resetConfluenceCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetConfluenceCapabilities"></a>

```java
public void resetConfluenceCapabilities()
```

##### `resetConfluenceDocument` <a name="resetConfluenceDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetConfluenceDocument"></a>

```java
public void resetConfluenceDocument()
```

##### `resetGitHubCapabilities` <a name="resetGitHubCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitHubCapabilities"></a>

```java
public void resetGitHubCapabilities()
```

##### `resetGitHubRepository` <a name="resetGitHubRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitHubRepository"></a>

```java
public void resetGitHubRepository()
```

##### `resetGitLabCapabilities` <a name="resetGitLabCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitLabCapabilities"></a>

```java
public void resetGitLabCapabilities()
```

##### `resetGitLabRepository` <a name="resetGitLabRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resetGitLabRepository"></a>

```java
public void resetGitLabRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities">bitbucketCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository">bitbucketRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities">confluenceCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument">confluenceDocument</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities">gitHubCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository">gitHubRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities">gitLabCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository">gitLabRepository</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilitiesInput">bitbucketCapabilitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepositoryInput">bitbucketRepositoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilitiesInput">confluenceCapabilitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocumentInput">confluenceDocumentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilitiesInput">gitHubCapabilitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepositoryInput">gitHubRepositoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilitiesInput">gitLabCapabilitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepositoryInput">gitLabRepositoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bitbucketCapabilities`<sup>Required</sup> <a name="bitbucketCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference getBitbucketCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a>

---

##### `bitbucketRepository`<sup>Required</sup> <a name="bitbucketRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference getBitbucketRepository();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a>

---

##### `confluenceCapabilities`<sup>Required</sup> <a name="confluenceCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference getConfluenceCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a>

---

##### `confluenceDocument`<sup>Required</sup> <a name="confluenceDocument" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference getConfluenceDocument();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a>

---

##### `gitHubCapabilities`<sup>Required</sup> <a name="gitHubCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference getGitHubCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a>

---

##### `gitHubRepository`<sup>Required</sup> <a name="gitHubRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference getGitHubRepository();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a>

---

##### `gitLabCapabilities`<sup>Required</sup> <a name="gitLabCapabilities" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference getGitLabCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a>

---

##### `gitLabRepository`<sup>Required</sup> <a name="gitLabRepository" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository"></a>

```java
public SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference getGitLabRepository();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a>

---

##### `bitbucketCapabilitiesInput`<sup>Optional</sup> <a name="bitbucketCapabilitiesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilitiesInput"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities getBitbucketCapabilitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

---

##### `bitbucketRepositoryInput`<sup>Optional</sup> <a name="bitbucketRepositoryInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepositoryInput"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository getBitbucketRepositoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

---

##### `confluenceCapabilitiesInput`<sup>Optional</sup> <a name="confluenceCapabilitiesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilitiesInput"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities getConfluenceCapabilitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

---

##### `confluenceDocumentInput`<sup>Optional</sup> <a name="confluenceDocumentInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocumentInput"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument getConfluenceDocumentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

---

##### `gitHubCapabilitiesInput`<sup>Optional</sup> <a name="gitHubCapabilitiesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilitiesInput"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities getGitHubCapabilitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

---

##### `gitHubRepositoryInput`<sup>Optional</sup> <a name="gitHubRepositoryInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepositoryInput"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository getGitHubRepositoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

---

##### `gitLabCapabilitiesInput`<sup>Optional</sup> <a name="gitLabCapabilitiesInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilitiesInput"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities getGitLabCapabilitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

---

##### `gitLabRepositoryInput`<sup>Optional</sup> <a name="gitLabRepositoryInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepositoryInput"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository getGitLabRepositoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">SecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceIntegratedResourcesProviderResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceIntegratedResourcesProviderResources">SecurityagentAgentSpaceIntegratedResourcesProviderResources</a>

---


### SecurityagentAgentSpaceTagsList <a name="SecurityagentAgentSpaceTagsList" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceTagsList;

new SecurityagentAgentSpaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.get"></a>

```java
public SecurityagentAgentSpaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityagentAgentSpaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>>

---


### SecurityagentAgentSpaceTagsOutputReference <a name="SecurityagentAgentSpaceTagsOutputReference" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_agent_space.SecurityagentAgentSpaceTagsOutputReference;

new SecurityagentAgentSpaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentAgentSpaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentAgentSpace.SecurityagentAgentSpaceTags">SecurityagentAgentSpaceTags</a>

---



