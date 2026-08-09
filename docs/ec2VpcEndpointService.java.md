# `ec2VpcEndpointService` Submodule <a name="`ec2VpcEndpointService` Submodule" id="@cdktn/provider-awscc.ec2VpcEndpointService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEndpointService <a name="Ec2VpcEndpointService" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service awscc_ec2_vpc_endpoint_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_service.Ec2VpcEndpointService;

Ec2VpcEndpointService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .acceptanceRequired(java.lang.Boolean|IResolvable)
//  .contributorInsightsEnabled(java.lang.Boolean|IResolvable)
//  .gatewayLoadBalancerArns(java.util.List<java.lang.String>)
//  .networkLoadBalancerArns(java.util.List<java.lang.String>)
//  .payerResponsibility(java.lang.String)
//  .supportedIpAddressTypes(java.util.List<java.lang.String>)
//  .supportedRegions(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<Ec2VpcEndpointServiceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.acceptanceRequired">acceptanceRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#acceptance_required Ec2VpcEndpointService#acceptance_required}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.contributorInsightsEnabled">contributorInsightsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#contributor_insights_enabled Ec2VpcEndpointService#contributor_insights_enabled}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.gatewayLoadBalancerArns">gatewayLoadBalancerArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#gateway_load_balancer_arns Ec2VpcEndpointService#gateway_load_balancer_arns}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.networkLoadBalancerArns">networkLoadBalancerArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#network_load_balancer_arns Ec2VpcEndpointService#network_load_balancer_arns}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.payerResponsibility">payerResponsibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#payer_responsibility Ec2VpcEndpointService#payer_responsibility}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.supportedIpAddressTypes">supportedIpAddressTypes</a></code> | <code>java.util.List<java.lang.String></code> | Specify which Ip Address types are supported for VPC endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.supportedRegions">supportedRegions</a></code> | <code>java.util.List<java.lang.String></code> | The Regions from which service consumers can access the service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>></code> | The tags to add to the VPC endpoint service. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceptanceRequired`<sup>Optional</sup> <a name="acceptanceRequired" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.acceptanceRequired"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#acceptance_required Ec2VpcEndpointService#acceptance_required}.

---

##### `contributorInsightsEnabled`<sup>Optional</sup> <a name="contributorInsightsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.contributorInsightsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#contributor_insights_enabled Ec2VpcEndpointService#contributor_insights_enabled}.

---

##### `gatewayLoadBalancerArns`<sup>Optional</sup> <a name="gatewayLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.gatewayLoadBalancerArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#gateway_load_balancer_arns Ec2VpcEndpointService#gateway_load_balancer_arns}.

---

##### `networkLoadBalancerArns`<sup>Optional</sup> <a name="networkLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.networkLoadBalancerArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#network_load_balancer_arns Ec2VpcEndpointService#network_load_balancer_arns}.

---

##### `payerResponsibility`<sup>Optional</sup> <a name="payerResponsibility" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.payerResponsibility"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#payer_responsibility Ec2VpcEndpointService#payer_responsibility}.

---

##### `supportedIpAddressTypes`<sup>Optional</sup> <a name="supportedIpAddressTypes" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.supportedIpAddressTypes"></a>

- *Type:* java.util.List<java.lang.String>

Specify which Ip Address types are supported for VPC endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#supported_ip_address_types Ec2VpcEndpointService#supported_ip_address_types}

---

##### `supportedRegions`<sup>Optional</sup> <a name="supportedRegions" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.supportedRegions"></a>

- *Type:* java.util.List<java.lang.String>

The Regions from which service consumers can access the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#supported_regions Ec2VpcEndpointService#supported_regions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>>

The tags to add to the VPC endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#tags Ec2VpcEndpointService#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetAcceptanceRequired">resetAcceptanceRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetContributorInsightsEnabled">resetContributorInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetGatewayLoadBalancerArns">resetGatewayLoadBalancerArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetNetworkLoadBalancerArns">resetNetworkLoadBalancerArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPayerResponsibility">resetPayerResponsibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedIpAddressTypes">resetSupportedIpAddressTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedRegions">resetSupportedRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2VpcEndpointServiceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>>

---

##### `resetAcceptanceRequired` <a name="resetAcceptanceRequired" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetAcceptanceRequired"></a>

```java
public void resetAcceptanceRequired()
```

##### `resetContributorInsightsEnabled` <a name="resetContributorInsightsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetContributorInsightsEnabled"></a>

```java
public void resetContributorInsightsEnabled()
```

##### `resetGatewayLoadBalancerArns` <a name="resetGatewayLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetGatewayLoadBalancerArns"></a>

```java
public void resetGatewayLoadBalancerArns()
```

##### `resetNetworkLoadBalancerArns` <a name="resetNetworkLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetNetworkLoadBalancerArns"></a>

```java
public void resetNetworkLoadBalancerArns()
```

##### `resetPayerResponsibility` <a name="resetPayerResponsibility" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPayerResponsibility"></a>

```java
public void resetPayerResponsibility()
```

##### `resetSupportedIpAddressTypes` <a name="resetSupportedIpAddressTypes" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedIpAddressTypes"></a>

```java
public void resetSupportedIpAddressTypes()
```

##### `resetSupportedRegions` <a name="resetSupportedRegions" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedRegions"></a>

```java
public void resetSupportedRegions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcEndpointService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_service.Ec2VpcEndpointService;

Ec2VpcEndpointService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_service.Ec2VpcEndpointService;

Ec2VpcEndpointService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_service.Ec2VpcEndpointService;

Ec2VpcEndpointService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_service.Ec2VpcEndpointService;

Ec2VpcEndpointService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2VpcEndpointService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2VpcEndpointService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2VpcEndpointService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2VpcEndpointService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEndpointService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList">Ec2VpcEndpointServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequiredInput">acceptanceRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabledInput">contributorInsightsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArnsInput">gatewayLoadBalancerArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArnsInput">networkLoadBalancerArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibilityInput">payerResponsibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypesInput">supportedIpAddressTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegionsInput">supportedRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequired">acceptanceRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabled">contributorInsightsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArns">gatewayLoadBalancerArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArns">networkLoadBalancerArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibility">payerResponsibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypes">supportedIpAddressTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegions">supportedRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tags"></a>

```java
public Ec2VpcEndpointServiceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList">Ec2VpcEndpointServiceTagsList</a>

---

##### `acceptanceRequiredInput`<sup>Optional</sup> <a name="acceptanceRequiredInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getAcceptanceRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `contributorInsightsEnabledInput`<sup>Optional</sup> <a name="contributorInsightsEnabledInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getContributorInsightsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `gatewayLoadBalancerArnsInput`<sup>Optional</sup> <a name="gatewayLoadBalancerArnsInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArnsInput"></a>

```java
public java.util.List<java.lang.String> getGatewayLoadBalancerArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkLoadBalancerArnsInput`<sup>Optional</sup> <a name="networkLoadBalancerArnsInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArnsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkLoadBalancerArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `payerResponsibilityInput`<sup>Optional</sup> <a name="payerResponsibilityInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibilityInput"></a>

```java
public java.lang.String getPayerResponsibilityInput();
```

- *Type:* java.lang.String

---

##### `supportedIpAddressTypesInput`<sup>Optional</sup> <a name="supportedIpAddressTypesInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedIpAddressTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedRegionsInput`<sup>Optional</sup> <a name="supportedRegionsInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegionsInput"></a>

```java
public java.util.List<java.lang.String> getSupportedRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2VpcEndpointServiceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>>

---

##### `acceptanceRequired`<sup>Required</sup> <a name="acceptanceRequired" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequired"></a>

```java
public java.lang.Boolean|IResolvable getAcceptanceRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `contributorInsightsEnabled`<sup>Required</sup> <a name="contributorInsightsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getContributorInsightsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `gatewayLoadBalancerArns`<sup>Required</sup> <a name="gatewayLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArns"></a>

```java
public java.util.List<java.lang.String> getGatewayLoadBalancerArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkLoadBalancerArns`<sup>Required</sup> <a name="networkLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArns"></a>

```java
public java.util.List<java.lang.String> getNetworkLoadBalancerArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `payerResponsibility`<sup>Required</sup> <a name="payerResponsibility" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibility"></a>

```java
public java.lang.String getPayerResponsibility();
```

- *Type:* java.lang.String

---

##### `supportedIpAddressTypes`<sup>Required</sup> <a name="supportedIpAddressTypes" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedIpAddressTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedRegions`<sup>Required</sup> <a name="supportedRegions" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegions"></a>

```java
public java.util.List<java.lang.String> getSupportedRegions();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEndpointServiceConfig <a name="Ec2VpcEndpointServiceConfig" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_service.Ec2VpcEndpointServiceConfig;

Ec2VpcEndpointServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .acceptanceRequired(java.lang.Boolean|IResolvable)
//  .contributorInsightsEnabled(java.lang.Boolean|IResolvable)
//  .gatewayLoadBalancerArns(java.util.List<java.lang.String>)
//  .networkLoadBalancerArns(java.util.List<java.lang.String>)
//  .payerResponsibility(java.lang.String)
//  .supportedIpAddressTypes(java.util.List<java.lang.String>)
//  .supportedRegions(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<Ec2VpcEndpointServiceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.acceptanceRequired">acceptanceRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#acceptance_required Ec2VpcEndpointService#acceptance_required}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.contributorInsightsEnabled">contributorInsightsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#contributor_insights_enabled Ec2VpcEndpointService#contributor_insights_enabled}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.gatewayLoadBalancerArns">gatewayLoadBalancerArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#gateway_load_balancer_arns Ec2VpcEndpointService#gateway_load_balancer_arns}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.networkLoadBalancerArns">networkLoadBalancerArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#network_load_balancer_arns Ec2VpcEndpointService#network_load_balancer_arns}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.payerResponsibility">payerResponsibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#payer_responsibility Ec2VpcEndpointService#payer_responsibility}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedIpAddressTypes">supportedIpAddressTypes</a></code> | <code>java.util.List<java.lang.String></code> | Specify which Ip Address types are supported for VPC endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedRegions">supportedRegions</a></code> | <code>java.util.List<java.lang.String></code> | The Regions from which service consumers can access the service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>></code> | The tags to add to the VPC endpoint service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceptanceRequired`<sup>Optional</sup> <a name="acceptanceRequired" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.acceptanceRequired"></a>

```java
public java.lang.Boolean|IResolvable getAcceptanceRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#acceptance_required Ec2VpcEndpointService#acceptance_required}.

---

##### `contributorInsightsEnabled`<sup>Optional</sup> <a name="contributorInsightsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.contributorInsightsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getContributorInsightsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#contributor_insights_enabled Ec2VpcEndpointService#contributor_insights_enabled}.

---

##### `gatewayLoadBalancerArns`<sup>Optional</sup> <a name="gatewayLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.gatewayLoadBalancerArns"></a>

```java
public java.util.List<java.lang.String> getGatewayLoadBalancerArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#gateway_load_balancer_arns Ec2VpcEndpointService#gateway_load_balancer_arns}.

---

##### `networkLoadBalancerArns`<sup>Optional</sup> <a name="networkLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.networkLoadBalancerArns"></a>

```java
public java.util.List<java.lang.String> getNetworkLoadBalancerArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#network_load_balancer_arns Ec2VpcEndpointService#network_load_balancer_arns}.

---

##### `payerResponsibility`<sup>Optional</sup> <a name="payerResponsibility" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.payerResponsibility"></a>

```java
public java.lang.String getPayerResponsibility();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#payer_responsibility Ec2VpcEndpointService#payer_responsibility}.

---

##### `supportedIpAddressTypes`<sup>Optional</sup> <a name="supportedIpAddressTypes" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedIpAddressTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedIpAddressTypes();
```

- *Type:* java.util.List<java.lang.String>

Specify which Ip Address types are supported for VPC endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#supported_ip_address_types Ec2VpcEndpointService#supported_ip_address_types}

---

##### `supportedRegions`<sup>Optional</sup> <a name="supportedRegions" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedRegions"></a>

```java
public java.util.List<java.lang.String> getSupportedRegions();
```

- *Type:* java.util.List<java.lang.String>

The Regions from which service consumers can access the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#supported_regions Ec2VpcEndpointService#supported_regions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2VpcEndpointServiceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>>

The tags to add to the VPC endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#tags Ec2VpcEndpointService#tags}

---

### Ec2VpcEndpointServiceTags <a name="Ec2VpcEndpointServiceTags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_service.Ec2VpcEndpointServiceTags;

Ec2VpcEndpointServiceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#key Ec2VpcEndpointService#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#value Ec2VpcEndpointService#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#key Ec2VpcEndpointService#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service#value Ec2VpcEndpointService#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcEndpointServiceTagsList <a name="Ec2VpcEndpointServiceTagsList" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_service.Ec2VpcEndpointServiceTagsList;

new Ec2VpcEndpointServiceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.get"></a>

```java
public Ec2VpcEndpointServiceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2VpcEndpointServiceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>>

---


### Ec2VpcEndpointServiceTagsOutputReference <a name="Ec2VpcEndpointServiceTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_service.Ec2VpcEndpointServiceTagsOutputReference;

new Ec2VpcEndpointServiceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2VpcEndpointServiceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>

---



