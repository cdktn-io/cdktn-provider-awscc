# `ec2IpamPool` Submodule <a name="`ec2IpamPool` Submodule" id="@cdktn/provider-awscc.ec2IpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamPool <a name="Ec2IpamPool" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool awscc_ec2_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address_family: str,
  ipam_scope_id: str,
  allocation_default_netmask_length: typing.Union[int, float] = None,
  allocation_max_netmask_length: typing.Union[int, float] = None,
  allocation_min_netmask_length: typing.Union[int, float] = None,
  allocation_resource_tags: IResolvable | typing.List[Ec2IpamPoolAllocationResourceTags] = None,
  auto_import: bool | IResolvable = None,
  aws_service: str = None,
  description: str = None,
  locale: str = None,
  provisioned_cidrs: IResolvable | typing.List[Ec2IpamPoolProvisionedCidrs] = None,
  public_ip_source: str = None,
  publicly_advertisable: bool | IResolvable = None,
  source_ipam_pool_id: str = None,
  source_resource: Ec2IpamPoolSourceResource = None,
  tags: IResolvable | typing.List[Ec2IpamPoolTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.addressFamily">address_family</a></code> | <code>str</code> | The address family of the address space in this pool. Either IPv4 or IPv6. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.ipamScopeId">ipam_scope_id</a></code> | <code>str</code> | The Id of the scope this pool is a part of. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationDefaultNetmaskLength">allocation_default_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The default netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationMaxNetmaskLength">allocation_max_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationMinNetmaskLength">allocation_min_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationResourceTags">allocation_resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>]</code> | When specified, an allocation will not be allowed unless a resource has a matching set of tags. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.autoImport">auto_import</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines what to do if IPAM discovers resources that haven't been assigned an allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.awsService">aws_service</a></code> | <code>str</code> | Limits which service in Amazon Web Services that the pool can be used in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.locale">locale</a></code> | <code>str</code> | The region of this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provisionedCidrs">provisioned_cidrs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>]</code> | A list of cidrs representing the address space available for allocation in this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.publicIpSource">public_ip_source</a></code> | <code>str</code> | The IP address source for pools in the public scope. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.publiclyAdvertisable">publicly_advertisable</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines whether or not address space from this pool is publicly advertised. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.sourceIpamPoolId">source_ipam_pool_id</a></code> | <code>str</code> | The Id of this pool's source. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.sourceResource">source_resource</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | The resource associated with this pool's space. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.addressFamily"></a>

- *Type:* str

The address family of the address space in this pool. Either IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#address_family Ec2IpamPool#address_family}

---

##### `ipam_scope_id`<sup>Required</sup> <a name="ipam_scope_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.ipamScopeId"></a>

- *Type:* str

The Id of the scope this pool is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#ipam_scope_id Ec2IpamPool#ipam_scope_id}

---

##### `allocation_default_netmask_length`<sup>Optional</sup> <a name="allocation_default_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationDefaultNetmaskLength"></a>

- *Type:* typing.Union[int, float]

The default netmask length for allocations made from this pool.

This value is used when the netmask length of an allocation isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#allocation_default_netmask_length Ec2IpamPool#allocation_default_netmask_length}

---

##### `allocation_max_netmask_length`<sup>Optional</sup> <a name="allocation_max_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationMaxNetmaskLength"></a>

- *Type:* typing.Union[int, float]

The maximum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#allocation_max_netmask_length Ec2IpamPool#allocation_max_netmask_length}

---

##### `allocation_min_netmask_length`<sup>Optional</sup> <a name="allocation_min_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationMinNetmaskLength"></a>

- *Type:* typing.Union[int, float]

The minimum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#allocation_min_netmask_length Ec2IpamPool#allocation_min_netmask_length}

---

##### `allocation_resource_tags`<sup>Optional</sup> <a name="allocation_resource_tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationResourceTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>]

When specified, an allocation will not be allowed unless a resource has a matching set of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#allocation_resource_tags Ec2IpamPool#allocation_resource_tags}

---

##### `auto_import`<sup>Optional</sup> <a name="auto_import" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.autoImport"></a>

- *Type:* bool | cdktn.IResolvable

Determines what to do if IPAM discovers resources that haven't been assigned an allocation.

If set to true, an allocation will be made automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#auto_import Ec2IpamPool#auto_import}

---

##### `aws_service`<sup>Optional</sup> <a name="aws_service" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.awsService"></a>

- *Type:* str

Limits which service in Amazon Web Services that the pool can be used in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#aws_service Ec2IpamPool#aws_service}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.locale"></a>

- *Type:* str

The region of this pool.

If not set, this will default to "None" which will disable non-custom allocations. If the locale has been specified for the source pool, this value must match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#locale Ec2IpamPool#locale}

---

##### `provisioned_cidrs`<sup>Optional</sup> <a name="provisioned_cidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provisionedCidrs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>]

A list of cidrs representing the address space available for allocation in this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#provisioned_cidrs Ec2IpamPool#provisioned_cidrs}

---

##### `public_ip_source`<sup>Optional</sup> <a name="public_ip_source" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.publicIpSource"></a>

- *Type:* str

The IP address source for pools in the public scope.

Only used for provisioning IP address CIDRs to pools in the public scope. Default is `byoip`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#public_ip_source Ec2IpamPool#public_ip_source}

---

##### `publicly_advertisable`<sup>Optional</sup> <a name="publicly_advertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.publiclyAdvertisable"></a>

- *Type:* bool | cdktn.IResolvable

Determines whether or not address space from this pool is publicly advertised.

Must be set if and only if the pool is IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#publicly_advertisable Ec2IpamPool#publicly_advertisable}

---

##### `source_ipam_pool_id`<sup>Optional</sup> <a name="source_ipam_pool_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.sourceIpamPoolId"></a>

- *Type:* str

The Id of this pool's source.

If set, all space provisioned in this pool must be free space provisioned in the parent pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#source_ipam_pool_id Ec2IpamPool#source_ipam_pool_id}

---

##### `source_resource`<sup>Optional</sup> <a name="source_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.sourceResource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

The resource associated with this pool's space.

Depending on the ResourceType, setting a SourceResource changes which space can be provisioned in this pool and which types of resources can receive allocations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#source_resource Ec2IpamPool#source_resource}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#tags Ec2IpamPool#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags">put_allocation_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs">put_provisioned_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource">put_source_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationDefaultNetmaskLength">reset_allocation_default_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMaxNetmaskLength">reset_allocation_max_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMinNetmaskLength">reset_allocation_min_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationResourceTags">reset_allocation_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAutoImport">reset_auto_import</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAwsService">reset_aws_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetLocale">reset_locale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetProvisionedCidrs">reset_provisioned_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPublicIpSource">reset_public_ip_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPubliclyAdvertisable">reset_publicly_advertisable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceIpamPoolId">reset_source_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceResource">reset_source_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allocation_resource_tags` <a name="put_allocation_resource_tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags"></a>

```python
def put_allocation_resource_tags(
  value: IResolvable | typing.List[Ec2IpamPoolAllocationResourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>]

---

##### `put_provisioned_cidrs` <a name="put_provisioned_cidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs"></a>

```python
def put_provisioned_cidrs(
  value: IResolvable | typing.List[Ec2IpamPoolProvisionedCidrs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>]

---

##### `put_source_resource` <a name="put_source_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource"></a>

```python
def put_source_resource(
  resource_id: str = None,
  resource_owner: str = None,
  resource_region: str = None,
  resource_type: str = None
) -> None
```

###### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_id Ec2IpamPool#resource_id}.

---

###### `resource_owner`<sup>Optional</sup> <a name="resource_owner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource.parameter.resourceOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_owner Ec2IpamPool#resource_owner}.

---

###### `resource_region`<sup>Optional</sup> <a name="resource_region" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource.parameter.resourceRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_region Ec2IpamPool#resource_region}.

---

###### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_type Ec2IpamPool#resource_type}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2IpamPoolTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>]

---

##### `reset_allocation_default_netmask_length` <a name="reset_allocation_default_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationDefaultNetmaskLength"></a>

```python
def reset_allocation_default_netmask_length() -> None
```

##### `reset_allocation_max_netmask_length` <a name="reset_allocation_max_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMaxNetmaskLength"></a>

```python
def reset_allocation_max_netmask_length() -> None
```

##### `reset_allocation_min_netmask_length` <a name="reset_allocation_min_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMinNetmaskLength"></a>

```python
def reset_allocation_min_netmask_length() -> None
```

##### `reset_allocation_resource_tags` <a name="reset_allocation_resource_tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationResourceTags"></a>

```python
def reset_allocation_resource_tags() -> None
```

##### `reset_auto_import` <a name="reset_auto_import" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAutoImport"></a>

```python
def reset_auto_import() -> None
```

##### `reset_aws_service` <a name="reset_aws_service" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAwsService"></a>

```python
def reset_aws_service() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_locale` <a name="reset_locale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetLocale"></a>

```python
def reset_locale() -> None
```

##### `reset_provisioned_cidrs` <a name="reset_provisioned_cidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetProvisionedCidrs"></a>

```python
def reset_provisioned_cidrs() -> None
```

##### `reset_public_ip_source` <a name="reset_public_ip_source" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPublicIpSource"></a>

```python
def reset_public_ip_source() -> None
```

##### `reset_publicly_advertisable` <a name="reset_publicly_advertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPubliclyAdvertisable"></a>

```python
def reset_publicly_advertisable() -> None
```

##### `reset_source_ipam_pool_id` <a name="reset_source_ipam_pool_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceIpamPoolId"></a>

```python
def reset_source_ipam_pool_id() -> None
```

##### `reset_source_resource` <a name="reset_source_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceResource"></a>

```python
def reset_source_resource() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2IpamPool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2IpamPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2IpamPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2IpamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTags">allocation_resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList">Ec2IpamPoolAllocationResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamArn">ipam_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeArn">ipam_scope_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeType">ipam_scope_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.poolDepth">pool_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrs">provisioned_cidrs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList">Ec2IpamPoolProvisionedCidrsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResource">source_resource</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference">Ec2IpamPoolSourceResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList">Ec2IpamPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamilyInput">address_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLengthInput">allocation_default_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLengthInput">allocation_max_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLengthInput">allocation_min_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTagsInput">allocation_resource_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImportInput">auto_import_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsServiceInput">aws_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeIdInput">ipam_scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrsInput">provisioned_cidrs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSourceInput">public_ip_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisableInput">publicly_advertisable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolIdInput">source_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResourceInput">source_resource_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLength">allocation_default_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLength">allocation_max_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLength">allocation_min_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImport">auto_import</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsService">aws_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeId">ipam_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSource">public_ip_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisable">publicly_advertisable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolId">source_ipam_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocation_resource_tags`<sup>Required</sup> <a name="allocation_resource_tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTags"></a>

```python
allocation_resource_tags: Ec2IpamPoolAllocationResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList">Ec2IpamPoolAllocationResourceTagsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_arn`<sup>Required</sup> <a name="ipam_arn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamArn"></a>

```python
ipam_arn: str
```

- *Type:* str

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

---

##### `ipam_scope_arn`<sup>Required</sup> <a name="ipam_scope_arn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeArn"></a>

```python
ipam_scope_arn: str
```

- *Type:* str

---

##### `ipam_scope_type`<sup>Required</sup> <a name="ipam_scope_type" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeType"></a>

```python
ipam_scope_type: str
```

- *Type:* str

---

##### `pool_depth`<sup>Required</sup> <a name="pool_depth" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.poolDepth"></a>

```python
pool_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_cidrs`<sup>Required</sup> <a name="provisioned_cidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrs"></a>

```python
provisioned_cidrs: Ec2IpamPoolProvisionedCidrsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList">Ec2IpamPoolProvisionedCidrsList</a>

---

##### `source_resource`<sup>Required</sup> <a name="source_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResource"></a>

```python
source_resource: Ec2IpamPoolSourceResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference">Ec2IpamPoolSourceResourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tags"></a>

```python
tags: Ec2IpamPoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList">Ec2IpamPoolTagsList</a>

---

##### `address_family_input`<sup>Optional</sup> <a name="address_family_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamilyInput"></a>

```python
address_family_input: str
```

- *Type:* str

---

##### `allocation_default_netmask_length_input`<sup>Optional</sup> <a name="allocation_default_netmask_length_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLengthInput"></a>

```python
allocation_default_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_max_netmask_length_input`<sup>Optional</sup> <a name="allocation_max_netmask_length_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLengthInput"></a>

```python
allocation_max_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_min_netmask_length_input`<sup>Optional</sup> <a name="allocation_min_netmask_length_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLengthInput"></a>

```python
allocation_min_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_resource_tags_input`<sup>Optional</sup> <a name="allocation_resource_tags_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTagsInput"></a>

```python
allocation_resource_tags_input: IResolvable | typing.List[Ec2IpamPoolAllocationResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>]

---

##### `auto_import_input`<sup>Optional</sup> <a name="auto_import_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImportInput"></a>

```python
auto_import_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `aws_service_input`<sup>Optional</sup> <a name="aws_service_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsServiceInput"></a>

```python
aws_service_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ipam_scope_id_input`<sup>Optional</sup> <a name="ipam_scope_id_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeIdInput"></a>

```python
ipam_scope_id_input: str
```

- *Type:* str

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `provisioned_cidrs_input`<sup>Optional</sup> <a name="provisioned_cidrs_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrsInput"></a>

```python
provisioned_cidrs_input: IResolvable | typing.List[Ec2IpamPoolProvisionedCidrs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>]

---

##### `public_ip_source_input`<sup>Optional</sup> <a name="public_ip_source_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSourceInput"></a>

```python
public_ip_source_input: str
```

- *Type:* str

---

##### `publicly_advertisable_input`<sup>Optional</sup> <a name="publicly_advertisable_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisableInput"></a>

```python
publicly_advertisable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_ipam_pool_id_input`<sup>Optional</sup> <a name="source_ipam_pool_id_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolIdInput"></a>

```python
source_ipam_pool_id_input: str
```

- *Type:* str

---

##### `source_resource_input`<sup>Optional</sup> <a name="source_resource_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResourceInput"></a>

```python
source_resource_input: IResolvable | Ec2IpamPoolSourceResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2IpamPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `allocation_default_netmask_length`<sup>Required</sup> <a name="allocation_default_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLength"></a>

```python
allocation_default_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_max_netmask_length`<sup>Required</sup> <a name="allocation_max_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLength"></a>

```python
allocation_max_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_min_netmask_length`<sup>Required</sup> <a name="allocation_min_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLength"></a>

```python
allocation_min_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_import`<sup>Required</sup> <a name="auto_import" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImport"></a>

```python
auto_import: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `aws_service`<sup>Required</sup> <a name="aws_service" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsService"></a>

```python
aws_service: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ipam_scope_id`<sup>Required</sup> <a name="ipam_scope_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeId"></a>

```python
ipam_scope_id: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `public_ip_source`<sup>Required</sup> <a name="public_ip_source" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSource"></a>

```python
public_ip_source: str
```

- *Type:* str

---

##### `publicly_advertisable`<sup>Required</sup> <a name="publicly_advertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisable"></a>

```python
publicly_advertisable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_ipam_pool_id`<sup>Required</sup> <a name="source_ipam_pool_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolId"></a>

```python
source_ipam_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamPoolAllocationResourceTags <a name="Ec2IpamPoolAllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolAllocationResourceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#key Ec2IpamPool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#value Ec2IpamPool#value}

---

### Ec2IpamPoolConfig <a name="Ec2IpamPoolConfig" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address_family: str,
  ipam_scope_id: str,
  allocation_default_netmask_length: typing.Union[int, float] = None,
  allocation_max_netmask_length: typing.Union[int, float] = None,
  allocation_min_netmask_length: typing.Union[int, float] = None,
  allocation_resource_tags: IResolvable | typing.List[Ec2IpamPoolAllocationResourceTags] = None,
  auto_import: bool | IResolvable = None,
  aws_service: str = None,
  description: str = None,
  locale: str = None,
  provisioned_cidrs: IResolvable | typing.List[Ec2IpamPoolProvisionedCidrs] = None,
  public_ip_source: str = None,
  publicly_advertisable: bool | IResolvable = None,
  source_ipam_pool_id: str = None,
  source_resource: Ec2IpamPoolSourceResource = None,
  tags: IResolvable | typing.List[Ec2IpamPoolTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.addressFamily">address_family</a></code> | <code>str</code> | The address family of the address space in this pool. Either IPv4 or IPv6. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.ipamScopeId">ipam_scope_id</a></code> | <code>str</code> | The Id of the scope this pool is a part of. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationDefaultNetmaskLength">allocation_default_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The default netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMaxNetmaskLength">allocation_max_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMinNetmaskLength">allocation_min_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationResourceTags">allocation_resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>]</code> | When specified, an allocation will not be allowed unless a resource has a matching set of tags. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.autoImport">auto_import</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines what to do if IPAM discovers resources that haven't been assigned an allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.awsService">aws_service</a></code> | <code>str</code> | Limits which service in Amazon Web Services that the pool can be used in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.locale">locale</a></code> | <code>str</code> | The region of this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisionedCidrs">provisioned_cidrs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>]</code> | A list of cidrs representing the address space available for allocation in this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publicIpSource">public_ip_source</a></code> | <code>str</code> | The IP address source for pools in the public scope. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publiclyAdvertisable">publicly_advertisable</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines whether or not address space from this pool is publicly advertised. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceIpamPoolId">source_ipam_pool_id</a></code> | <code>str</code> | The Id of this pool's source. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceResource">source_resource</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | The resource associated with this pool's space. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

The address family of the address space in this pool. Either IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#address_family Ec2IpamPool#address_family}

---

##### `ipam_scope_id`<sup>Required</sup> <a name="ipam_scope_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.ipamScopeId"></a>

```python
ipam_scope_id: str
```

- *Type:* str

The Id of the scope this pool is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#ipam_scope_id Ec2IpamPool#ipam_scope_id}

---

##### `allocation_default_netmask_length`<sup>Optional</sup> <a name="allocation_default_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationDefaultNetmaskLength"></a>

```python
allocation_default_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default netmask length for allocations made from this pool.

This value is used when the netmask length of an allocation isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#allocation_default_netmask_length Ec2IpamPool#allocation_default_netmask_length}

---

##### `allocation_max_netmask_length`<sup>Optional</sup> <a name="allocation_max_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMaxNetmaskLength"></a>

```python
allocation_max_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#allocation_max_netmask_length Ec2IpamPool#allocation_max_netmask_length}

---

##### `allocation_min_netmask_length`<sup>Optional</sup> <a name="allocation_min_netmask_length" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMinNetmaskLength"></a>

```python
allocation_min_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#allocation_min_netmask_length Ec2IpamPool#allocation_min_netmask_length}

---

##### `allocation_resource_tags`<sup>Optional</sup> <a name="allocation_resource_tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationResourceTags"></a>

```python
allocation_resource_tags: IResolvable | typing.List[Ec2IpamPoolAllocationResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>]

When specified, an allocation will not be allowed unless a resource has a matching set of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#allocation_resource_tags Ec2IpamPool#allocation_resource_tags}

---

##### `auto_import`<sup>Optional</sup> <a name="auto_import" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.autoImport"></a>

```python
auto_import: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Determines what to do if IPAM discovers resources that haven't been assigned an allocation.

If set to true, an allocation will be made automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#auto_import Ec2IpamPool#auto_import}

---

##### `aws_service`<sup>Optional</sup> <a name="aws_service" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.awsService"></a>

```python
aws_service: str
```

- *Type:* str

Limits which service in Amazon Web Services that the pool can be used in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#aws_service Ec2IpamPool#aws_service}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.locale"></a>

```python
locale: str
```

- *Type:* str

The region of this pool.

If not set, this will default to "None" which will disable non-custom allocations. If the locale has been specified for the source pool, this value must match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#locale Ec2IpamPool#locale}

---

##### `provisioned_cidrs`<sup>Optional</sup> <a name="provisioned_cidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisionedCidrs"></a>

```python
provisioned_cidrs: IResolvable | typing.List[Ec2IpamPoolProvisionedCidrs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>]

A list of cidrs representing the address space available for allocation in this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#provisioned_cidrs Ec2IpamPool#provisioned_cidrs}

---

##### `public_ip_source`<sup>Optional</sup> <a name="public_ip_source" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publicIpSource"></a>

```python
public_ip_source: str
```

- *Type:* str

The IP address source for pools in the public scope.

Only used for provisioning IP address CIDRs to pools in the public scope. Default is `byoip`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#public_ip_source Ec2IpamPool#public_ip_source}

---

##### `publicly_advertisable`<sup>Optional</sup> <a name="publicly_advertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publiclyAdvertisable"></a>

```python
publicly_advertisable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Determines whether or not address space from this pool is publicly advertised.

Must be set if and only if the pool is IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#publicly_advertisable Ec2IpamPool#publicly_advertisable}

---

##### `source_ipam_pool_id`<sup>Optional</sup> <a name="source_ipam_pool_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceIpamPoolId"></a>

```python
source_ipam_pool_id: str
```

- *Type:* str

The Id of this pool's source.

If set, all space provisioned in this pool must be free space provisioned in the parent pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#source_ipam_pool_id Ec2IpamPool#source_ipam_pool_id}

---

##### `source_resource`<sup>Optional</sup> <a name="source_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceResource"></a>

```python
source_resource: Ec2IpamPoolSourceResource
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

The resource associated with this pool's space.

Depending on the ResourceType, setting a SourceResource changes which space can be provisioned in this pool and which types of resources can receive allocations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#source_resource Ec2IpamPool#source_resource}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2IpamPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#tags Ec2IpamPool#tags}

---

### Ec2IpamPoolProvisionedCidrs <a name="Ec2IpamPoolProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolProvisionedCidrs(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.property.cidr">cidr</a></code> | <code>str</code> | Represents a single IPv4 or IPv6 CIDR. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Represents a single IPv4 or IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#cidr Ec2IpamPool#cidr}

---

### Ec2IpamPoolSourceResource <a name="Ec2IpamPoolSourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolSourceResource(
  resource_id: str = None,
  resource_owner: str = None,
  resource_region: str = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_id Ec2IpamPool#resource_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceOwner">resource_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_owner Ec2IpamPool#resource_owner}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceRegion">resource_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_region Ec2IpamPool#resource_region}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_type Ec2IpamPool#resource_type}. |

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_id Ec2IpamPool#resource_id}.

---

##### `resource_owner`<sup>Optional</sup> <a name="resource_owner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceOwner"></a>

```python
resource_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_owner Ec2IpamPool#resource_owner}.

---

##### `resource_region`<sup>Optional</sup> <a name="resource_region" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_region Ec2IpamPool#resource_region}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#resource_type Ec2IpamPool#resource_type}.

---

### Ec2IpamPoolTags <a name="Ec2IpamPoolTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#key Ec2IpamPool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_pool#value Ec2IpamPool#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamPoolAllocationResourceTagsList <a name="Ec2IpamPoolAllocationResourceTagsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2IpamPoolAllocationResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2IpamPoolAllocationResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>]

---


### Ec2IpamPoolAllocationResourceTagsOutputReference <a name="Ec2IpamPoolAllocationResourceTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2IpamPoolAllocationResourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>

---


### Ec2IpamPoolProvisionedCidrsList <a name="Ec2IpamPoolProvisionedCidrsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolProvisionedCidrsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2IpamPoolProvisionedCidrsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2IpamPoolProvisionedCidrs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>]

---


### Ec2IpamPoolProvisionedCidrsOutputReference <a name="Ec2IpamPoolProvisionedCidrsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2IpamPoolProvisionedCidrs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>

---


### Ec2IpamPoolSourceResourceOutputReference <a name="Ec2IpamPoolSourceResourceOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceOwner">reset_resource_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceRegion">reset_resource_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_resource_owner` <a name="reset_resource_owner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceOwner"></a>

```python
def reset_resource_owner() -> None
```

##### `reset_resource_region` <a name="reset_resource_region" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceRegion"></a>

```python
def reset_resource_region() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwnerInput">resource_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegionInput">resource_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwner">resource_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_owner_input`<sup>Optional</sup> <a name="resource_owner_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwnerInput"></a>

```python
resource_owner_input: str
```

- *Type:* str

---

##### `resource_region_input`<sup>Optional</sup> <a name="resource_region_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegionInput"></a>

```python
resource_region_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_owner`<sup>Required</sup> <a name="resource_owner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwner"></a>

```python
resource_owner: str
```

- *Type:* str

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2IpamPoolSourceResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

---


### Ec2IpamPoolTagsList <a name="Ec2IpamPoolTagsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2IpamPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2IpamPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>]

---


### Ec2IpamPoolTagsOutputReference <a name="Ec2IpamPoolTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool

ec2IpamPool.Ec2IpamPoolTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2IpamPoolTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>

---



