# `ec2VpcEndpointService` Submodule <a name="`ec2VpcEndpointService` Submodule" id="@cdktn/provider-awscc.ec2VpcEndpointService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEndpointService <a name="Ec2VpcEndpointService" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service awscc_ec2_vpc_endpoint_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_service

ec2VpcEndpointService.Ec2VpcEndpointService(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acceptance_required: bool | IResolvable = None,
  contributor_insights_enabled: bool | IResolvable = None,
  gateway_load_balancer_arns: typing.List[str] = None,
  network_load_balancer_arns: typing.List[str] = None,
  payer_responsibility: str = None,
  private_dns_name: str = None,
  private_dns_name_configuration: Ec2VpcEndpointServicePrivateDnsNameConfiguration = None,
  supported_ip_address_types: typing.List[str] = None,
  supported_regions: typing.List[str] = None,
  tags: IResolvable | typing.List[Ec2VpcEndpointServiceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.acceptanceRequired">acceptance_required</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#acceptance_required Ec2VpcEndpointService#acceptance_required}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.contributorInsightsEnabled">contributor_insights_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#contributor_insights_enabled Ec2VpcEndpointService#contributor_insights_enabled}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.gatewayLoadBalancerArns">gateway_load_balancer_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#gateway_load_balancer_arns Ec2VpcEndpointService#gateway_load_balancer_arns}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.networkLoadBalancerArns">network_load_balancer_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#network_load_balancer_arns Ec2VpcEndpointService#network_load_balancer_arns}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.payerResponsibility">payer_responsibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#payer_responsibility Ec2VpcEndpointService#payer_responsibility}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.privateDnsName">private_dns_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name Ec2VpcEndpointService#private_dns_name}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.privateDnsNameConfiguration">private_dns_name_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name_configuration Ec2VpcEndpointService#private_dns_name_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.supportedIpAddressTypes">supported_ip_address_types</a></code> | <code>typing.List[str]</code> | Specify which Ip Address types are supported for VPC endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.supportedRegions">supported_regions</a></code> | <code>typing.List[str]</code> | The Regions from which service consumers can access the service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>]</code> | The tags to add to the VPC endpoint service. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acceptance_required`<sup>Optional</sup> <a name="acceptance_required" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.acceptanceRequired"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#acceptance_required Ec2VpcEndpointService#acceptance_required}.

---

##### `contributor_insights_enabled`<sup>Optional</sup> <a name="contributor_insights_enabled" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.contributorInsightsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#contributor_insights_enabled Ec2VpcEndpointService#contributor_insights_enabled}.

---

##### `gateway_load_balancer_arns`<sup>Optional</sup> <a name="gateway_load_balancer_arns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.gatewayLoadBalancerArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#gateway_load_balancer_arns Ec2VpcEndpointService#gateway_load_balancer_arns}.

---

##### `network_load_balancer_arns`<sup>Optional</sup> <a name="network_load_balancer_arns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.networkLoadBalancerArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#network_load_balancer_arns Ec2VpcEndpointService#network_load_balancer_arns}.

---

##### `payer_responsibility`<sup>Optional</sup> <a name="payer_responsibility" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.payerResponsibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#payer_responsibility Ec2VpcEndpointService#payer_responsibility}.

---

##### `private_dns_name`<sup>Optional</sup> <a name="private_dns_name" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.privateDnsName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name Ec2VpcEndpointService#private_dns_name}.

---

##### `private_dns_name_configuration`<sup>Optional</sup> <a name="private_dns_name_configuration" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.privateDnsNameConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name_configuration Ec2VpcEndpointService#private_dns_name_configuration}.

---

##### `supported_ip_address_types`<sup>Optional</sup> <a name="supported_ip_address_types" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.supportedIpAddressTypes"></a>

- *Type:* typing.List[str]

Specify which Ip Address types are supported for VPC endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#supported_ip_address_types Ec2VpcEndpointService#supported_ip_address_types}

---

##### `supported_regions`<sup>Optional</sup> <a name="supported_regions" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.supportedRegions"></a>

- *Type:* typing.List[str]

The Regions from which service consumers can access the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#supported_regions Ec2VpcEndpointService#supported_regions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>]

The tags to add to the VPC endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#tags Ec2VpcEndpointService#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putPrivateDnsNameConfiguration">put_private_dns_name_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetAcceptanceRequired">reset_acceptance_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetContributorInsightsEnabled">reset_contributor_insights_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetGatewayLoadBalancerArns">reset_gateway_load_balancer_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetNetworkLoadBalancerArns">reset_network_load_balancer_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPayerResponsibility">reset_payer_responsibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPrivateDnsName">reset_private_dns_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPrivateDnsNameConfiguration">reset_private_dns_name_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedIpAddressTypes">reset_supported_ip_address_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedRegions">reset_supported_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_private_dns_name_configuration` <a name="put_private_dns_name_configuration" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putPrivateDnsNameConfiguration"></a>

```python
def put_private_dns_name_configuration() -> None
```

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2VpcEndpointServiceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>]

---

##### `reset_acceptance_required` <a name="reset_acceptance_required" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetAcceptanceRequired"></a>

```python
def reset_acceptance_required() -> None
```

##### `reset_contributor_insights_enabled` <a name="reset_contributor_insights_enabled" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetContributorInsightsEnabled"></a>

```python
def reset_contributor_insights_enabled() -> None
```

##### `reset_gateway_load_balancer_arns` <a name="reset_gateway_load_balancer_arns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetGatewayLoadBalancerArns"></a>

```python
def reset_gateway_load_balancer_arns() -> None
```

##### `reset_network_load_balancer_arns` <a name="reset_network_load_balancer_arns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetNetworkLoadBalancerArns"></a>

```python
def reset_network_load_balancer_arns() -> None
```

##### `reset_payer_responsibility` <a name="reset_payer_responsibility" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPayerResponsibility"></a>

```python
def reset_payer_responsibility() -> None
```

##### `reset_private_dns_name` <a name="reset_private_dns_name" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPrivateDnsName"></a>

```python
def reset_private_dns_name() -> None
```

##### `reset_private_dns_name_configuration` <a name="reset_private_dns_name_configuration" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPrivateDnsNameConfiguration"></a>

```python
def reset_private_dns_name_configuration() -> None
```

##### `reset_supported_ip_address_types` <a name="reset_supported_ip_address_types" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedIpAddressTypes"></a>

```python
def reset_supported_ip_address_types() -> None
```

##### `reset_supported_regions` <a name="reset_supported_regions" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedRegions"></a>

```python
def reset_supported_regions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2VpcEndpointService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_service

ec2VpcEndpointService.Ec2VpcEndpointService.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_service

ec2VpcEndpointService.Ec2VpcEndpointService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_service

ec2VpcEndpointService.Ec2VpcEndpointService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_service

ec2VpcEndpointService.Ec2VpcEndpointService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2VpcEndpointService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2VpcEndpointService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2VpcEndpointService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEndpointService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameConfiguration">private_dns_name_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference">Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList">Ec2VpcEndpointServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequiredInput">acceptance_required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabledInput">contributor_insights_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArnsInput">gateway_load_balancer_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArnsInput">network_load_balancer_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibilityInput">payer_responsibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameConfigurationInput">private_dns_name_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameInput">private_dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypesInput">supported_ip_address_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegionsInput">supported_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequired">acceptance_required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabled">contributor_insights_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArns">gateway_load_balancer_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArns">network_load_balancer_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibility">payer_responsibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsName">private_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypes">supported_ip_address_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegions">supported_regions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_dns_name_configuration`<sup>Required</sup> <a name="private_dns_name_configuration" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameConfiguration"></a>

```python
private_dns_name_configuration: Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference">Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference</a>

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tags"></a>

```python
tags: Ec2VpcEndpointServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList">Ec2VpcEndpointServiceTagsList</a>

---

##### `acceptance_required_input`<sup>Optional</sup> <a name="acceptance_required_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequiredInput"></a>

```python
acceptance_required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contributor_insights_enabled_input`<sup>Optional</sup> <a name="contributor_insights_enabled_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabledInput"></a>

```python
contributor_insights_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gateway_load_balancer_arns_input`<sup>Optional</sup> <a name="gateway_load_balancer_arns_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArnsInput"></a>

```python
gateway_load_balancer_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_load_balancer_arns_input`<sup>Optional</sup> <a name="network_load_balancer_arns_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArnsInput"></a>

```python
network_load_balancer_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `payer_responsibility_input`<sup>Optional</sup> <a name="payer_responsibility_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibilityInput"></a>

```python
payer_responsibility_input: str
```

- *Type:* str

---

##### `private_dns_name_configuration_input`<sup>Optional</sup> <a name="private_dns_name_configuration_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameConfigurationInput"></a>

```python
private_dns_name_configuration_input: IResolvable | Ec2VpcEndpointServicePrivateDnsNameConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a>

---

##### `private_dns_name_input`<sup>Optional</sup> <a name="private_dns_name_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameInput"></a>

```python
private_dns_name_input: str
```

- *Type:* str

---

##### `supported_ip_address_types_input`<sup>Optional</sup> <a name="supported_ip_address_types_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypesInput"></a>

```python
supported_ip_address_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_regions_input`<sup>Optional</sup> <a name="supported_regions_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegionsInput"></a>

```python
supported_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2VpcEndpointServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>]

---

##### `acceptance_required`<sup>Required</sup> <a name="acceptance_required" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequired"></a>

```python
acceptance_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contributor_insights_enabled`<sup>Required</sup> <a name="contributor_insights_enabled" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabled"></a>

```python
contributor_insights_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gateway_load_balancer_arns`<sup>Required</sup> <a name="gateway_load_balancer_arns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArns"></a>

```python
gateway_load_balancer_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_load_balancer_arns`<sup>Required</sup> <a name="network_load_balancer_arns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArns"></a>

```python
network_load_balancer_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `payer_responsibility`<sup>Required</sup> <a name="payer_responsibility" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibility"></a>

```python
payer_responsibility: str
```

- *Type:* str

---

##### `private_dns_name`<sup>Required</sup> <a name="private_dns_name" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsName"></a>

```python
private_dns_name: str
```

- *Type:* str

---

##### `supported_ip_address_types`<sup>Required</sup> <a name="supported_ip_address_types" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypes"></a>

```python
supported_ip_address_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_regions`<sup>Required</sup> <a name="supported_regions" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegions"></a>

```python
supported_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEndpointServiceConfig <a name="Ec2VpcEndpointServiceConfig" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_service

ec2VpcEndpointService.Ec2VpcEndpointServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acceptance_required: bool | IResolvable = None,
  contributor_insights_enabled: bool | IResolvable = None,
  gateway_load_balancer_arns: typing.List[str] = None,
  network_load_balancer_arns: typing.List[str] = None,
  payer_responsibility: str = None,
  private_dns_name: str = None,
  private_dns_name_configuration: Ec2VpcEndpointServicePrivateDnsNameConfiguration = None,
  supported_ip_address_types: typing.List[str] = None,
  supported_regions: typing.List[str] = None,
  tags: IResolvable | typing.List[Ec2VpcEndpointServiceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.acceptanceRequired">acceptance_required</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#acceptance_required Ec2VpcEndpointService#acceptance_required}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.contributorInsightsEnabled">contributor_insights_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#contributor_insights_enabled Ec2VpcEndpointService#contributor_insights_enabled}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.gatewayLoadBalancerArns">gateway_load_balancer_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#gateway_load_balancer_arns Ec2VpcEndpointService#gateway_load_balancer_arns}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.networkLoadBalancerArns">network_load_balancer_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#network_load_balancer_arns Ec2VpcEndpointService#network_load_balancer_arns}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.payerResponsibility">payer_responsibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#payer_responsibility Ec2VpcEndpointService#payer_responsibility}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.privateDnsName">private_dns_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name Ec2VpcEndpointService#private_dns_name}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.privateDnsNameConfiguration">private_dns_name_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name_configuration Ec2VpcEndpointService#private_dns_name_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedIpAddressTypes">supported_ip_address_types</a></code> | <code>typing.List[str]</code> | Specify which Ip Address types are supported for VPC endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedRegions">supported_regions</a></code> | <code>typing.List[str]</code> | The Regions from which service consumers can access the service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>]</code> | The tags to add to the VPC endpoint service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acceptance_required`<sup>Optional</sup> <a name="acceptance_required" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.acceptanceRequired"></a>

```python
acceptance_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#acceptance_required Ec2VpcEndpointService#acceptance_required}.

---

##### `contributor_insights_enabled`<sup>Optional</sup> <a name="contributor_insights_enabled" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.contributorInsightsEnabled"></a>

```python
contributor_insights_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#contributor_insights_enabled Ec2VpcEndpointService#contributor_insights_enabled}.

---

##### `gateway_load_balancer_arns`<sup>Optional</sup> <a name="gateway_load_balancer_arns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.gatewayLoadBalancerArns"></a>

```python
gateway_load_balancer_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#gateway_load_balancer_arns Ec2VpcEndpointService#gateway_load_balancer_arns}.

---

##### `network_load_balancer_arns`<sup>Optional</sup> <a name="network_load_balancer_arns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.networkLoadBalancerArns"></a>

```python
network_load_balancer_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#network_load_balancer_arns Ec2VpcEndpointService#network_load_balancer_arns}.

---

##### `payer_responsibility`<sup>Optional</sup> <a name="payer_responsibility" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.payerResponsibility"></a>

```python
payer_responsibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#payer_responsibility Ec2VpcEndpointService#payer_responsibility}.

---

##### `private_dns_name`<sup>Optional</sup> <a name="private_dns_name" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.privateDnsName"></a>

```python
private_dns_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name Ec2VpcEndpointService#private_dns_name}.

---

##### `private_dns_name_configuration`<sup>Optional</sup> <a name="private_dns_name_configuration" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.privateDnsNameConfiguration"></a>

```python
private_dns_name_configuration: Ec2VpcEndpointServicePrivateDnsNameConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name_configuration Ec2VpcEndpointService#private_dns_name_configuration}.

---

##### `supported_ip_address_types`<sup>Optional</sup> <a name="supported_ip_address_types" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedIpAddressTypes"></a>

```python
supported_ip_address_types: typing.List[str]
```

- *Type:* typing.List[str]

Specify which Ip Address types are supported for VPC endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#supported_ip_address_types Ec2VpcEndpointService#supported_ip_address_types}

---

##### `supported_regions`<sup>Optional</sup> <a name="supported_regions" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedRegions"></a>

```python
supported_regions: typing.List[str]
```

- *Type:* typing.List[str]

The Regions from which service consumers can access the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#supported_regions Ec2VpcEndpointService#supported_regions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2VpcEndpointServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>]

The tags to add to the VPC endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#tags Ec2VpcEndpointService#tags}

---

### Ec2VpcEndpointServicePrivateDnsNameConfiguration <a name="Ec2VpcEndpointServicePrivateDnsNameConfiguration" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_service

ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration()
```


### Ec2VpcEndpointServiceTags <a name="Ec2VpcEndpointServiceTags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_service

ec2VpcEndpointService.Ec2VpcEndpointServiceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#key Ec2VpcEndpointService#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#value Ec2VpcEndpointService#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#key Ec2VpcEndpointService#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_vpc_endpoint_service#value Ec2VpcEndpointService#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference <a name="Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_service

ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpcEndpointServicePrivateDnsNameConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a>

---


### Ec2VpcEndpointServiceTagsList <a name="Ec2VpcEndpointServiceTagsList" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_service

ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpcEndpointServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpcEndpointServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>]

---


### Ec2VpcEndpointServiceTagsOutputReference <a name="Ec2VpcEndpointServiceTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_service

ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpcEndpointServiceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>

---



