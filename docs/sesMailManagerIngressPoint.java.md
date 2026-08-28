# `sesMailManagerIngressPoint` Submodule <a name="`sesMailManagerIngressPoint` Submodule" id="@cdktn/provider-awscc.sesMailManagerIngressPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesMailManagerIngressPoint <a name="SesMailManagerIngressPoint" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point awscc_ses_mail_manager_ingress_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPoint;

SesMailManagerIngressPoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ruleSetId(java.lang.String)
    .trafficPolicyId(java.lang.String)
    .type(java.lang.String)
//  .ingressPointConfiguration(SesMailManagerIngressPointIngressPointConfiguration)
//  .ingressPointName(java.lang.String)
//  .networkConfiguration(SesMailManagerIngressPointNetworkConfiguration)
//  .statusToUpdate(java.lang.String)
//  .tags(IResolvable|java.util.List<SesMailManagerIngressPointTags>)
//  .tlsPolicy(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ruleSetId">ruleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#rule_set_id SesMailManagerIngressPoint#rule_set_id}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.trafficPolicyId">trafficPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#traffic_policy_id SesMailManagerIngressPoint#traffic_policy_id}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#type SesMailManagerIngressPoint#type}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ingressPointConfiguration">ingressPointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_configuration SesMailManagerIngressPoint#ingress_point_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ingressPointName">ingressPointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_name SesMailManagerIngressPoint#ingress_point_name}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#network_configuration SesMailManagerIngressPoint#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.statusToUpdate">statusToUpdate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#status_to_update SesMailManagerIngressPoint#status_to_update}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#tags SesMailManagerIngressPoint#tags}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#tls_policy SesMailManagerIngressPoint#tls_policy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ruleSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#rule_set_id SesMailManagerIngressPoint#rule_set_id}.

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.trafficPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#traffic_policy_id SesMailManagerIngressPoint#traffic_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#type SesMailManagerIngressPoint#type}.

---

##### `ingressPointConfiguration`<sup>Optional</sup> <a name="ingressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ingressPointConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_configuration SesMailManagerIngressPoint#ingress_point_configuration}.

---

##### `ingressPointName`<sup>Optional</sup> <a name="ingressPointName" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ingressPointName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_name SesMailManagerIngressPoint#ingress_point_name}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#network_configuration SesMailManagerIngressPoint#network_configuration}.

---

##### `statusToUpdate`<sup>Optional</sup> <a name="statusToUpdate" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.statusToUpdate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#status_to_update SesMailManagerIngressPoint#status_to_update}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#tags SesMailManagerIngressPoint#tags}.

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.tlsPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#tls_policy SesMailManagerIngressPoint#tls_policy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putIngressPointConfiguration">putIngressPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointConfiguration">resetIngressPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointName">resetIngressPointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetStatusToUpdate">resetStatusToUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTlsPolicy">resetTlsPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngressPointConfiguration` <a name="putIngressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putIngressPointConfiguration"></a>

```java
public void putIngressPointConfiguration(SesMailManagerIngressPointIngressPointConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putIngressPointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(SesMailManagerIngressPointNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SesMailManagerIngressPointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>>

---

##### `resetIngressPointConfiguration` <a name="resetIngressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointConfiguration"></a>

```java
public void resetIngressPointConfiguration()
```

##### `resetIngressPointName` <a name="resetIngressPointName" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointName"></a>

```java
public void resetIngressPointName()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetStatusToUpdate` <a name="resetStatusToUpdate" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetStatusToUpdate"></a>

```java
public void resetStatusToUpdate()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTlsPolicy` <a name="resetTlsPolicy" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTlsPolicy"></a>

```java
public void resetTlsPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesMailManagerIngressPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPoint;

SesMailManagerIngressPoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPoint;

SesMailManagerIngressPoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPoint;

SesMailManagerIngressPoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPoint;

SesMailManagerIngressPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SesMailManagerIngressPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SesMailManagerIngressPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SesMailManagerIngressPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SesMailManagerIngressPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SesMailManagerIngressPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.aRecord">aRecord</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointArn">ingressPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfiguration">ingressPointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointId">ingressPointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList">SesMailManagerIngressPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfigurationInput">ingressPointConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointNameInput">ingressPointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetIdInput">ruleSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdateInput">statusToUpdateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicyInput">tlsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyIdInput">trafficPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointName">ingressPointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetId">ruleSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdate">statusToUpdate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyId">trafficPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aRecord`<sup>Required</sup> <a name="aRecord" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.aRecord"></a>

```java
public java.lang.String getARecord();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingressPointArn`<sup>Required</sup> <a name="ingressPointArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointArn"></a>

```java
public java.lang.String getIngressPointArn();
```

- *Type:* java.lang.String

---

##### `ingressPointConfiguration`<sup>Required</sup> <a name="ingressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfiguration"></a>

```java
public SesMailManagerIngressPointIngressPointConfigurationOutputReference getIngressPointConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationOutputReference</a>

---

##### `ingressPointId`<sup>Required</sup> <a name="ingressPointId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointId"></a>

```java
public java.lang.String getIngressPointId();
```

- *Type:* java.lang.String

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfiguration"></a>

```java
public SesMailManagerIngressPointNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tags"></a>

```java
public SesMailManagerIngressPointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList">SesMailManagerIngressPointTagsList</a>

---

##### `ingressPointConfigurationInput`<sup>Optional</sup> <a name="ingressPointConfigurationInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfigurationInput"></a>

```java
public IResolvable|SesMailManagerIngressPointIngressPointConfiguration getIngressPointConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

---

##### `ingressPointNameInput`<sup>Optional</sup> <a name="ingressPointNameInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointNameInput"></a>

```java
public java.lang.String getIngressPointNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfigurationInput"></a>

```java
public IResolvable|SesMailManagerIngressPointNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

---

##### `ruleSetIdInput`<sup>Optional</sup> <a name="ruleSetIdInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetIdInput"></a>

```java
public java.lang.String getRuleSetIdInput();
```

- *Type:* java.lang.String

---

##### `statusToUpdateInput`<sup>Optional</sup> <a name="statusToUpdateInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdateInput"></a>

```java
public java.lang.String getStatusToUpdateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SesMailManagerIngressPointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>>

---

##### `tlsPolicyInput`<sup>Optional</sup> <a name="tlsPolicyInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicyInput"></a>

```java
public java.lang.String getTlsPolicyInput();
```

- *Type:* java.lang.String

---

##### `trafficPolicyIdInput`<sup>Optional</sup> <a name="trafficPolicyIdInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyIdInput"></a>

```java
public java.lang.String getTrafficPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `ingressPointName`<sup>Required</sup> <a name="ingressPointName" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointName"></a>

```java
public java.lang.String getIngressPointName();
```

- *Type:* java.lang.String

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetId"></a>

```java
public java.lang.String getRuleSetId();
```

- *Type:* java.lang.String

---

##### `statusToUpdate`<sup>Required</sup> <a name="statusToUpdate" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdate"></a>

```java
public java.lang.String getStatusToUpdate();
```

- *Type:* java.lang.String

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyId"></a>

```java
public java.lang.String getTrafficPolicyId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SesMailManagerIngressPointConfig <a name="SesMailManagerIngressPointConfig" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointConfig;

SesMailManagerIngressPointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ruleSetId(java.lang.String)
    .trafficPolicyId(java.lang.String)
    .type(java.lang.String)
//  .ingressPointConfiguration(SesMailManagerIngressPointIngressPointConfiguration)
//  .ingressPointName(java.lang.String)
//  .networkConfiguration(SesMailManagerIngressPointNetworkConfiguration)
//  .statusToUpdate(java.lang.String)
//  .tags(IResolvable|java.util.List<SesMailManagerIngressPointTags>)
//  .tlsPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ruleSetId">ruleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#rule_set_id SesMailManagerIngressPoint#rule_set_id}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.trafficPolicyId">trafficPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#traffic_policy_id SesMailManagerIngressPoint#traffic_policy_id}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#type SesMailManagerIngressPoint#type}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointConfiguration">ingressPointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_configuration SesMailManagerIngressPoint#ingress_point_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointName">ingressPointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_name SesMailManagerIngressPoint#ingress_point_name}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#network_configuration SesMailManagerIngressPoint#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.statusToUpdate">statusToUpdate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#status_to_update SesMailManagerIngressPoint#status_to_update}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#tags SesMailManagerIngressPoint#tags}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#tls_policy SesMailManagerIngressPoint#tls_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ruleSetId"></a>

```java
public java.lang.String getRuleSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#rule_set_id SesMailManagerIngressPoint#rule_set_id}.

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.trafficPolicyId"></a>

```java
public java.lang.String getTrafficPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#traffic_policy_id SesMailManagerIngressPoint#traffic_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#type SesMailManagerIngressPoint#type}.

---

##### `ingressPointConfiguration`<sup>Optional</sup> <a name="ingressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointConfiguration"></a>

```java
public SesMailManagerIngressPointIngressPointConfiguration getIngressPointConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_configuration SesMailManagerIngressPoint#ingress_point_configuration}.

---

##### `ingressPointName`<sup>Optional</sup> <a name="ingressPointName" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointName"></a>

```java
public java.lang.String getIngressPointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_name SesMailManagerIngressPoint#ingress_point_name}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.networkConfiguration"></a>

```java
public SesMailManagerIngressPointNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#network_configuration SesMailManagerIngressPoint#network_configuration}.

---

##### `statusToUpdate`<sup>Optional</sup> <a name="statusToUpdate" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.statusToUpdate"></a>

```java
public java.lang.String getStatusToUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#status_to_update SesMailManagerIngressPoint#status_to_update}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SesMailManagerIngressPointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#tags SesMailManagerIngressPoint#tags}.

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#tls_policy SesMailManagerIngressPoint#tls_policy}.

---

### SesMailManagerIngressPointIngressPointConfiguration <a name="SesMailManagerIngressPointIngressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointIngressPointConfiguration;

SesMailManagerIngressPointIngressPointConfiguration.builder()
//  .secretArn(java.lang.String)
//  .smtpPassword(java.lang.String)
//  .tlsAuthConfiguration(SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#secret_arn SesMailManagerIngressPoint#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.smtpPassword">smtpPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#smtp_password SesMailManagerIngressPoint#smtp_password}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration">tlsAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#tls_auth_configuration SesMailManagerIngressPoint#tls_auth_configuration}. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#secret_arn SesMailManagerIngressPoint#secret_arn}.

---

##### `smtpPassword`<sup>Optional</sup> <a name="smtpPassword" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.smtpPassword"></a>

```java
public java.lang.String getSmtpPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#smtp_password SesMailManagerIngressPoint#smtp_password}.

---

##### `tlsAuthConfiguration`<sup>Optional</sup> <a name="tlsAuthConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration"></a>

```java
public SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration getTlsAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#tls_auth_configuration SesMailManagerIngressPoint#tls_auth_configuration}.

---

### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration;

SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration.builder()
//  .trustStore(SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore">trustStore</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#trust_store SesMailManagerIngressPoint#trust_store}. |

---

##### `trustStore`<sup>Optional</sup> <a name="trustStore" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore"></a>

```java
public SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore getTrustStore();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#trust_store SesMailManagerIngressPoint#trust_store}.

---

### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore;

SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.builder()
//  .caContent(java.lang.String)
//  .crlContent(java.lang.String)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent">caContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ca_content SesMailManagerIngressPoint#ca_content}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent">crlContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#crl_content SesMailManagerIngressPoint#crl_content}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#kms_key_arn SesMailManagerIngressPoint#kms_key_arn}. |

---

##### `caContent`<sup>Optional</sup> <a name="caContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent"></a>

```java
public java.lang.String getCaContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ca_content SesMailManagerIngressPoint#ca_content}.

---

##### `crlContent`<sup>Optional</sup> <a name="crlContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent"></a>

```java
public java.lang.String getCrlContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#crl_content SesMailManagerIngressPoint#crl_content}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#kms_key_arn SesMailManagerIngressPoint#kms_key_arn}.

---

### SesMailManagerIngressPointNetworkConfiguration <a name="SesMailManagerIngressPointNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointNetworkConfiguration;

SesMailManagerIngressPointNetworkConfiguration.builder()
//  .privateNetworkConfiguration(SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration)
//  .publicNetworkConfiguration(SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration">privateNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#private_network_configuration SesMailManagerIngressPoint#private_network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration">publicNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#public_network_configuration SesMailManagerIngressPoint#public_network_configuration}. |

---

##### `privateNetworkConfiguration`<sup>Optional</sup> <a name="privateNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration"></a>

```java
public SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration getPrivateNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#private_network_configuration SesMailManagerIngressPoint#private_network_configuration}.

---

##### `publicNetworkConfiguration`<sup>Optional</sup> <a name="publicNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration"></a>

```java
public SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration getPublicNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#public_network_configuration SesMailManagerIngressPoint#public_network_configuration}.

---

### SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration <a name="SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration;

SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.builder()
//  .vpcEndpointId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#vpc_endpoint_id SesMailManagerIngressPoint#vpc_endpoint_id}. |

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#vpc_endpoint_id SesMailManagerIngressPoint#vpc_endpoint_id}.

---

### SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration <a name="SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration;

SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration.builder()
//  .ipType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType">ipType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ip_type SesMailManagerIngressPoint#ip_type}. |

---

##### `ipType`<sup>Optional</sup> <a name="ipType" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType"></a>

```java
public java.lang.String getIpType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#ip_type SesMailManagerIngressPoint#ip_type}.

---

### SesMailManagerIngressPointTags <a name="SesMailManagerIngressPointTags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointTags;

SesMailManagerIngressPointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#key SesMailManagerIngressPoint#key}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#value SesMailManagerIngressPoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#key SesMailManagerIngressPoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_mail_manager_ingress_point#value SesMailManagerIngressPoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesMailManagerIngressPointIngressPointConfigurationOutputReference <a name="SesMailManagerIngressPointIngressPointConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointIngressPointConfigurationOutputReference;

new SesMailManagerIngressPointIngressPointConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration">putTlsAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPassword">resetSmtpPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration">resetTlsAuthConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTlsAuthConfiguration` <a name="putTlsAuthConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration"></a>

```java
public void putTlsAuthConfiguration(SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```

##### `resetSmtpPassword` <a name="resetSmtpPassword" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPassword"></a>

```java
public void resetSmtpPassword()
```

##### `resetTlsAuthConfiguration` <a name="resetTlsAuthConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration"></a>

```java
public void resetTlsAuthConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration">tlsAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordInput">smtpPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput">tlsAuthConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPassword">smtpPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tlsAuthConfiguration`<sup>Required</sup> <a name="tlsAuthConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration"></a>

```java
public SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference getTlsAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference</a>

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `smtpPasswordInput`<sup>Optional</sup> <a name="smtpPasswordInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordInput"></a>

```java
public java.lang.String getSmtpPasswordInput();
```

- *Type:* java.lang.String

---

##### `tlsAuthConfigurationInput`<sup>Optional</sup> <a name="tlsAuthConfigurationInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput"></a>

```java
public IResolvable|SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration getTlsAuthConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `smtpPassword`<sup>Required</sup> <a name="smtpPassword" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPassword"></a>

```java
public java.lang.String getSmtpPassword();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMailManagerIngressPointIngressPointConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

---


### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference;

new SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore">putTrustStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore">resetTrustStore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrustStore` <a name="putTrustStore" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore"></a>

```java
public void putTrustStore(SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---

##### `resetTrustStore` <a name="resetTrustStore" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore"></a>

```java
public void resetTrustStore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore">trustStore</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput">trustStoreInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore"></a>

```java
public SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference getTrustStore();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference</a>

---

##### `trustStoreInput`<sup>Optional</sup> <a name="trustStoreInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput"></a>

```java
public IResolvable|SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore getTrustStoreInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---


### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference;

new SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCaContent">resetCaContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent">resetCrlContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaContent` <a name="resetCaContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCaContent"></a>

```java
public void resetCaContent()
```

##### `resetCrlContent` <a name="resetCrlContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent"></a>

```java
public void resetCrlContent()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput">caContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput">crlContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent">caContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent">crlContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caContentInput`<sup>Optional</sup> <a name="caContentInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput"></a>

```java
public java.lang.String getCaContentInput();
```

- *Type:* java.lang.String

---

##### `crlContentInput`<sup>Optional</sup> <a name="crlContentInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput"></a>

```java
public java.lang.String getCrlContentInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `caContent`<sup>Required</sup> <a name="caContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent"></a>

```java
public java.lang.String getCaContent();
```

- *Type:* java.lang.String

---

##### `crlContent`<sup>Required</sup> <a name="crlContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent"></a>

```java
public java.lang.String getCrlContent();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---


### SesMailManagerIngressPointNetworkConfigurationOutputReference <a name="SesMailManagerIngressPointNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointNetworkConfigurationOutputReference;

new SesMailManagerIngressPointNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration">putPrivateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration">putPublicNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration">resetPrivateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration">resetPublicNetworkConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateNetworkConfiguration` <a name="putPrivateNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration"></a>

```java
public void putPrivateNetworkConfiguration(SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---

##### `putPublicNetworkConfiguration` <a name="putPublicNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration"></a>

```java
public void putPublicNetworkConfiguration(SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---

##### `resetPrivateNetworkConfiguration` <a name="resetPrivateNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration"></a>

```java
public void resetPrivateNetworkConfiguration()
```

##### `resetPublicNetworkConfiguration` <a name="resetPublicNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration"></a>

```java
public void resetPublicNetworkConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration">privateNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration">publicNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput">privateNetworkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput">publicNetworkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateNetworkConfiguration`<sup>Required</sup> <a name="privateNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration"></a>

```java
public SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference getPrivateNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference</a>

---

##### `publicNetworkConfiguration`<sup>Required</sup> <a name="publicNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration"></a>

```java
public SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference getPublicNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference</a>

---

##### `privateNetworkConfigurationInput`<sup>Optional</sup> <a name="privateNetworkConfigurationInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput"></a>

```java
public IResolvable|SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration getPrivateNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---

##### `publicNetworkConfigurationInput`<sup>Optional</sup> <a name="publicNetworkConfigurationInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput"></a>

```java
public IResolvable|SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration getPublicNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMailManagerIngressPointNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

---


### SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference <a name="SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference;

new SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resetVpcEndpointId"></a>

```java
public void resetVpcEndpointId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---


### SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference <a name="SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference;

new SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resetIpType">resetIpType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpType` <a name="resetIpType" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resetIpType"></a>

```java
public void resetIpType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput">ipTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType">ipType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipTypeInput`<sup>Optional</sup> <a name="ipTypeInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput"></a>

```java
public java.lang.String getIpTypeInput();
```

- *Type:* java.lang.String

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType"></a>

```java
public java.lang.String getIpType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---


### SesMailManagerIngressPointTagsList <a name="SesMailManagerIngressPointTagsList" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointTagsList;

new SesMailManagerIngressPointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.get"></a>

```java
public SesMailManagerIngressPointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SesMailManagerIngressPointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>>

---


### SesMailManagerIngressPointTagsOutputReference <a name="SesMailManagerIngressPointTagsOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_mail_manager_ingress_point.SesMailManagerIngressPointTagsOutputReference;

new SesMailManagerIngressPointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMailManagerIngressPointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>

---



