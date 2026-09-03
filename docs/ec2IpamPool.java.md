# `ec2IpamPool` Submodule <a name="`ec2IpamPool` Submodule" id="@cdktn/provider-awscc.ec2IpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamPool <a name="Ec2IpamPool" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool awscc_ec2_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPool;

Ec2IpamPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .addressFamily(java.lang.String)
    .ipamScopeId(java.lang.String)
//  .allocationDefaultNetmaskLength(java.lang.Number)
//  .allocationMaxNetmaskLength(java.lang.Number)
//  .allocationMinNetmaskLength(java.lang.Number)
//  .allocationResourceTags(IResolvable|java.util.List<Ec2IpamPoolAllocationResourceTags>)
//  .autoImport(java.lang.Boolean|IResolvable)
//  .awsService(java.lang.String)
//  .description(java.lang.String)
//  .locale(java.lang.String)
//  .provisionedCidrs(IResolvable|java.util.List<Ec2IpamPoolProvisionedCidrs>)
//  .publicIpSource(java.lang.String)
//  .publiclyAdvertisable(java.lang.Boolean|IResolvable)
//  .sourceIpamPoolId(java.lang.String)
//  .sourceResource(Ec2IpamPoolSourceResource)
//  .tags(IResolvable|java.util.List<Ec2IpamPoolTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | The address family of the address space in this pool. Either IPv4 or IPv6. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.ipamScopeId">ipamScopeId</a></code> | <code>java.lang.String</code> | The Id of the scope this pool is a part of. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>java.lang.Number</code> | The default netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>java.lang.Number</code> | The maximum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>java.lang.Number</code> | The minimum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationResourceTags">allocationResourceTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>></code> | When specified, an allocation will not be allowed unless a resource has a matching set of tags. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.autoImport">autoImport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines what to do if IPAM discovers resources that haven't been assigned an allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.awsService">awsService</a></code> | <code>java.lang.String</code> | Limits which service in Amazon Web Services that the pool can be used in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.locale">locale</a></code> | <code>java.lang.String</code> | The region of this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provisionedCidrs">provisionedCidrs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>></code> | A list of cidrs representing the address space available for allocation in this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.publicIpSource">publicIpSource</a></code> | <code>java.lang.String</code> | The IP address source for pools in the public scope. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines whether or not address space from this pool is publicly advertised. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>java.lang.String</code> | The Id of this pool's source. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.sourceResource">sourceResource</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | The resource associated with this pool's space. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.addressFamily"></a>

- *Type:* java.lang.String

The address family of the address space in this pool. Either IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#address_family Ec2IpamPool#address_family}

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.ipamScopeId"></a>

- *Type:* java.lang.String

The Id of the scope this pool is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#ipam_scope_id Ec2IpamPool#ipam_scope_id}

---

##### `allocationDefaultNetmaskLength`<sup>Optional</sup> <a name="allocationDefaultNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationDefaultNetmaskLength"></a>

- *Type:* java.lang.Number

The default netmask length for allocations made from this pool.

This value is used when the netmask length of an allocation isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#allocation_default_netmask_length Ec2IpamPool#allocation_default_netmask_length}

---

##### `allocationMaxNetmaskLength`<sup>Optional</sup> <a name="allocationMaxNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationMaxNetmaskLength"></a>

- *Type:* java.lang.Number

The maximum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#allocation_max_netmask_length Ec2IpamPool#allocation_max_netmask_length}

---

##### `allocationMinNetmaskLength`<sup>Optional</sup> <a name="allocationMinNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationMinNetmaskLength"></a>

- *Type:* java.lang.Number

The minimum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#allocation_min_netmask_length Ec2IpamPool#allocation_min_netmask_length}

---

##### `allocationResourceTags`<sup>Optional</sup> <a name="allocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.allocationResourceTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>>

When specified, an allocation will not be allowed unless a resource has a matching set of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#allocation_resource_tags Ec2IpamPool#allocation_resource_tags}

---

##### `autoImport`<sup>Optional</sup> <a name="autoImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.autoImport"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines what to do if IPAM discovers resources that haven't been assigned an allocation.

If set to true, an allocation will be made automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#auto_import Ec2IpamPool#auto_import}

---

##### `awsService`<sup>Optional</sup> <a name="awsService" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.awsService"></a>

- *Type:* java.lang.String

Limits which service in Amazon Web Services that the pool can be used in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#aws_service Ec2IpamPool#aws_service}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.locale"></a>

- *Type:* java.lang.String

The region of this pool.

If not set, this will default to "None" which will disable non-custom allocations. If the locale has been specified for the source pool, this value must match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#locale Ec2IpamPool#locale}

---

##### `provisionedCidrs`<sup>Optional</sup> <a name="provisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.provisionedCidrs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>>

A list of cidrs representing the address space available for allocation in this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#provisioned_cidrs Ec2IpamPool#provisioned_cidrs}

---

##### `publicIpSource`<sup>Optional</sup> <a name="publicIpSource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.publicIpSource"></a>

- *Type:* java.lang.String

The IP address source for pools in the public scope.

Only used for provisioning IP address CIDRs to pools in the public scope. Default is `byoip`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#public_ip_source Ec2IpamPool#public_ip_source}

---

##### `publiclyAdvertisable`<sup>Optional</sup> <a name="publiclyAdvertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.publiclyAdvertisable"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines whether or not address space from this pool is publicly advertised.

Must be set if and only if the pool is IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#publicly_advertisable Ec2IpamPool#publicly_advertisable}

---

##### `sourceIpamPoolId`<sup>Optional</sup> <a name="sourceIpamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.sourceIpamPoolId"></a>

- *Type:* java.lang.String

The Id of this pool's source.

If set, all space provisioned in this pool must be free space provisioned in the parent pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#source_ipam_pool_id Ec2IpamPool#source_ipam_pool_id}

---

##### `sourceResource`<sup>Optional</sup> <a name="sourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.sourceResource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

The resource associated with this pool's space.

Depending on the ResourceType, setting a SourceResource changes which space can be provisioned in this pool and which types of resources can receive allocations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#source_resource Ec2IpamPool#source_resource}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#tags Ec2IpamPool#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags">putAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs">putProvisionedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource">putSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationDefaultNetmaskLength">resetAllocationDefaultNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMaxNetmaskLength">resetAllocationMaxNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMinNetmaskLength">resetAllocationMinNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationResourceTags">resetAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAutoImport">resetAutoImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAwsService">resetAwsService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetProvisionedCidrs">resetProvisionedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPublicIpSource">resetPublicIpSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPubliclyAdvertisable">resetPubliclyAdvertisable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceIpamPoolId">resetSourceIpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceResource">resetSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllocationResourceTags` <a name="putAllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags"></a>

```java
public void putAllocationResourceTags(IResolvable|java.util.List<Ec2IpamPoolAllocationResourceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>>

---

##### `putProvisionedCidrs` <a name="putProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs"></a>

```java
public void putProvisionedCidrs(IResolvable|java.util.List<Ec2IpamPoolProvisionedCidrs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>>

---

##### `putSourceResource` <a name="putSourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource"></a>

```java
public void putSourceResource(Ec2IpamPoolSourceResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2IpamPoolTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>>

---

##### `resetAllocationDefaultNetmaskLength` <a name="resetAllocationDefaultNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationDefaultNetmaskLength"></a>

```java
public void resetAllocationDefaultNetmaskLength()
```

##### `resetAllocationMaxNetmaskLength` <a name="resetAllocationMaxNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMaxNetmaskLength"></a>

```java
public void resetAllocationMaxNetmaskLength()
```

##### `resetAllocationMinNetmaskLength` <a name="resetAllocationMinNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMinNetmaskLength"></a>

```java
public void resetAllocationMinNetmaskLength()
```

##### `resetAllocationResourceTags` <a name="resetAllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationResourceTags"></a>

```java
public void resetAllocationResourceTags()
```

##### `resetAutoImport` <a name="resetAutoImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAutoImport"></a>

```java
public void resetAutoImport()
```

##### `resetAwsService` <a name="resetAwsService" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAwsService"></a>

```java
public void resetAwsService()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocale` <a name="resetLocale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetLocale"></a>

```java
public void resetLocale()
```

##### `resetProvisionedCidrs` <a name="resetProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetProvisionedCidrs"></a>

```java
public void resetProvisionedCidrs()
```

##### `resetPublicIpSource` <a name="resetPublicIpSource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPublicIpSource"></a>

```java
public void resetPublicIpSource()
```

##### `resetPubliclyAdvertisable` <a name="resetPubliclyAdvertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPubliclyAdvertisable"></a>

```java
public void resetPubliclyAdvertisable()
```

##### `resetSourceIpamPoolId` <a name="resetSourceIpamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceIpamPoolId"></a>

```java
public void resetSourceIpamPoolId()
```

##### `resetSourceResource` <a name="resetSourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceResource"></a>

```java
public void resetSourceResource()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPool;

Ec2IpamPool.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPool;

Ec2IpamPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPool;

Ec2IpamPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPool;

Ec2IpamPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2IpamPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2IpamPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2IpamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2IpamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTags">allocationResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList">Ec2IpamPoolAllocationResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamArn">ipamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamPoolId">ipamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeArn">ipamScopeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeType">ipamScopeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.poolDepth">poolDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrs">provisionedCidrs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList">Ec2IpamPoolProvisionedCidrsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResource">sourceResource</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference">Ec2IpamPoolSourceResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList">Ec2IpamPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamilyInput">addressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLengthInput">allocationDefaultNetmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLengthInput">allocationMaxNetmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLengthInput">allocationMinNetmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTagsInput">allocationResourceTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImportInput">autoImportInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsServiceInput">awsServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeIdInput">ipamScopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrsInput">provisionedCidrsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSourceInput">publicIpSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisableInput">publiclyAdvertisableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolIdInput">sourceIpamPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResourceInput">sourceResourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImport">autoImport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsService">awsService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeId">ipamScopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSource">publicIpSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocationResourceTags`<sup>Required</sup> <a name="allocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTags"></a>

```java
public Ec2IpamPoolAllocationResourceTagsList getAllocationResourceTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList">Ec2IpamPoolAllocationResourceTagsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipamArn`<sup>Required</sup> <a name="ipamArn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamArn"></a>

```java
public java.lang.String getIpamArn();
```

- *Type:* java.lang.String

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamPoolId"></a>

```java
public java.lang.String getIpamPoolId();
```

- *Type:* java.lang.String

---

##### `ipamScopeArn`<sup>Required</sup> <a name="ipamScopeArn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeArn"></a>

```java
public java.lang.String getIpamScopeArn();
```

- *Type:* java.lang.String

---

##### `ipamScopeType`<sup>Required</sup> <a name="ipamScopeType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeType"></a>

```java
public java.lang.String getIpamScopeType();
```

- *Type:* java.lang.String

---

##### `poolDepth`<sup>Required</sup> <a name="poolDepth" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.poolDepth"></a>

```java
public java.lang.Number getPoolDepth();
```

- *Type:* java.lang.Number

---

##### `provisionedCidrs`<sup>Required</sup> <a name="provisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrs"></a>

```java
public Ec2IpamPoolProvisionedCidrsList getProvisionedCidrs();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList">Ec2IpamPoolProvisionedCidrsList</a>

---

##### `sourceResource`<sup>Required</sup> <a name="sourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResource"></a>

```java
public Ec2IpamPoolSourceResourceOutputReference getSourceResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference">Ec2IpamPoolSourceResourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tags"></a>

```java
public Ec2IpamPoolTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList">Ec2IpamPoolTagsList</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamilyInput"></a>

```java
public java.lang.String getAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `allocationDefaultNetmaskLengthInput`<sup>Optional</sup> <a name="allocationDefaultNetmaskLengthInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLengthInput"></a>

```java
public java.lang.Number getAllocationDefaultNetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `allocationMaxNetmaskLengthInput`<sup>Optional</sup> <a name="allocationMaxNetmaskLengthInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLengthInput"></a>

```java
public java.lang.Number getAllocationMaxNetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `allocationMinNetmaskLengthInput`<sup>Optional</sup> <a name="allocationMinNetmaskLengthInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLengthInput"></a>

```java
public java.lang.Number getAllocationMinNetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `allocationResourceTagsInput`<sup>Optional</sup> <a name="allocationResourceTagsInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTagsInput"></a>

```java
public IResolvable|java.util.List<Ec2IpamPoolAllocationResourceTags> getAllocationResourceTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>>

---

##### `autoImportInput`<sup>Optional</sup> <a name="autoImportInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImportInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoImportInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `awsServiceInput`<sup>Optional</sup> <a name="awsServiceInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsServiceInput"></a>

```java
public java.lang.String getAwsServiceInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `ipamScopeIdInput`<sup>Optional</sup> <a name="ipamScopeIdInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeIdInput"></a>

```java
public java.lang.String getIpamScopeIdInput();
```

- *Type:* java.lang.String

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `provisionedCidrsInput`<sup>Optional</sup> <a name="provisionedCidrsInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrsInput"></a>

```java
public IResolvable|java.util.List<Ec2IpamPoolProvisionedCidrs> getProvisionedCidrsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>>

---

##### `publicIpSourceInput`<sup>Optional</sup> <a name="publicIpSourceInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSourceInput"></a>

```java
public java.lang.String getPublicIpSourceInput();
```

- *Type:* java.lang.String

---

##### `publiclyAdvertisableInput`<sup>Optional</sup> <a name="publiclyAdvertisableInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisableInput"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAdvertisableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sourceIpamPoolIdInput`<sup>Optional</sup> <a name="sourceIpamPoolIdInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolIdInput"></a>

```java
public java.lang.String getSourceIpamPoolIdInput();
```

- *Type:* java.lang.String

---

##### `sourceResourceInput`<sup>Optional</sup> <a name="sourceResourceInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResourceInput"></a>

```java
public IResolvable|Ec2IpamPoolSourceResource getSourceResourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2IpamPoolTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `allocationDefaultNetmaskLength`<sup>Required</sup> <a name="allocationDefaultNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLength"></a>

```java
public java.lang.Number getAllocationDefaultNetmaskLength();
```

- *Type:* java.lang.Number

---

##### `allocationMaxNetmaskLength`<sup>Required</sup> <a name="allocationMaxNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLength"></a>

```java
public java.lang.Number getAllocationMaxNetmaskLength();
```

- *Type:* java.lang.Number

---

##### `allocationMinNetmaskLength`<sup>Required</sup> <a name="allocationMinNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLength"></a>

```java
public java.lang.Number getAllocationMinNetmaskLength();
```

- *Type:* java.lang.Number

---

##### `autoImport`<sup>Required</sup> <a name="autoImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImport"></a>

```java
public java.lang.Boolean|IResolvable getAutoImport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `awsService`<sup>Required</sup> <a name="awsService" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsService"></a>

```java
public java.lang.String getAwsService();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeId"></a>

```java
public java.lang.String getIpamScopeId();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `publicIpSource`<sup>Required</sup> <a name="publicIpSource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSource"></a>

```java
public java.lang.String getPublicIpSource();
```

- *Type:* java.lang.String

---

##### `publiclyAdvertisable`<sup>Required</sup> <a name="publiclyAdvertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisable"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAdvertisable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sourceIpamPoolId`<sup>Required</sup> <a name="sourceIpamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolId"></a>

```java
public java.lang.String getSourceIpamPoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamPoolAllocationResourceTags <a name="Ec2IpamPoolAllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolAllocationResourceTags;

Ec2IpamPoolAllocationResourceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#key Ec2IpamPool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#value Ec2IpamPool#value}

---

### Ec2IpamPoolConfig <a name="Ec2IpamPoolConfig" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolConfig;

Ec2IpamPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .addressFamily(java.lang.String)
    .ipamScopeId(java.lang.String)
//  .allocationDefaultNetmaskLength(java.lang.Number)
//  .allocationMaxNetmaskLength(java.lang.Number)
//  .allocationMinNetmaskLength(java.lang.Number)
//  .allocationResourceTags(IResolvable|java.util.List<Ec2IpamPoolAllocationResourceTags>)
//  .autoImport(java.lang.Boolean|IResolvable)
//  .awsService(java.lang.String)
//  .description(java.lang.String)
//  .locale(java.lang.String)
//  .provisionedCidrs(IResolvable|java.util.List<Ec2IpamPoolProvisionedCidrs>)
//  .publicIpSource(java.lang.String)
//  .publiclyAdvertisable(java.lang.Boolean|IResolvable)
//  .sourceIpamPoolId(java.lang.String)
//  .sourceResource(Ec2IpamPoolSourceResource)
//  .tags(IResolvable|java.util.List<Ec2IpamPoolTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | The address family of the address space in this pool. Either IPv4 or IPv6. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.ipamScopeId">ipamScopeId</a></code> | <code>java.lang.String</code> | The Id of the scope this pool is a part of. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>java.lang.Number</code> | The default netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>java.lang.Number</code> | The maximum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>java.lang.Number</code> | The minimum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationResourceTags">allocationResourceTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>></code> | When specified, an allocation will not be allowed unless a resource has a matching set of tags. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.autoImport">autoImport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines what to do if IPAM discovers resources that haven't been assigned an allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.awsService">awsService</a></code> | <code>java.lang.String</code> | Limits which service in Amazon Web Services that the pool can be used in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.locale">locale</a></code> | <code>java.lang.String</code> | The region of this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisionedCidrs">provisionedCidrs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>></code> | A list of cidrs representing the address space available for allocation in this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publicIpSource">publicIpSource</a></code> | <code>java.lang.String</code> | The IP address source for pools in the public scope. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines whether or not address space from this pool is publicly advertised. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>java.lang.String</code> | The Id of this pool's source. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceResource">sourceResource</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | The resource associated with this pool's space. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

The address family of the address space in this pool. Either IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#address_family Ec2IpamPool#address_family}

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.ipamScopeId"></a>

```java
public java.lang.String getIpamScopeId();
```

- *Type:* java.lang.String

The Id of the scope this pool is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#ipam_scope_id Ec2IpamPool#ipam_scope_id}

---

##### `allocationDefaultNetmaskLength`<sup>Optional</sup> <a name="allocationDefaultNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationDefaultNetmaskLength"></a>

```java
public java.lang.Number getAllocationDefaultNetmaskLength();
```

- *Type:* java.lang.Number

The default netmask length for allocations made from this pool.

This value is used when the netmask length of an allocation isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#allocation_default_netmask_length Ec2IpamPool#allocation_default_netmask_length}

---

##### `allocationMaxNetmaskLength`<sup>Optional</sup> <a name="allocationMaxNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMaxNetmaskLength"></a>

```java
public java.lang.Number getAllocationMaxNetmaskLength();
```

- *Type:* java.lang.Number

The maximum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#allocation_max_netmask_length Ec2IpamPool#allocation_max_netmask_length}

---

##### `allocationMinNetmaskLength`<sup>Optional</sup> <a name="allocationMinNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMinNetmaskLength"></a>

```java
public java.lang.Number getAllocationMinNetmaskLength();
```

- *Type:* java.lang.Number

The minimum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#allocation_min_netmask_length Ec2IpamPool#allocation_min_netmask_length}

---

##### `allocationResourceTags`<sup>Optional</sup> <a name="allocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationResourceTags"></a>

```java
public IResolvable|java.util.List<Ec2IpamPoolAllocationResourceTags> getAllocationResourceTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>>

When specified, an allocation will not be allowed unless a resource has a matching set of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#allocation_resource_tags Ec2IpamPool#allocation_resource_tags}

---

##### `autoImport`<sup>Optional</sup> <a name="autoImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.autoImport"></a>

```java
public java.lang.Boolean|IResolvable getAutoImport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines what to do if IPAM discovers resources that haven't been assigned an allocation.

If set to true, an allocation will be made automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#auto_import Ec2IpamPool#auto_import}

---

##### `awsService`<sup>Optional</sup> <a name="awsService" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.awsService"></a>

```java
public java.lang.String getAwsService();
```

- *Type:* java.lang.String

Limits which service in Amazon Web Services that the pool can be used in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#aws_service Ec2IpamPool#aws_service}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

The region of this pool.

If not set, this will default to "None" which will disable non-custom allocations. If the locale has been specified for the source pool, this value must match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#locale Ec2IpamPool#locale}

---

##### `provisionedCidrs`<sup>Optional</sup> <a name="provisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisionedCidrs"></a>

```java
public IResolvable|java.util.List<Ec2IpamPoolProvisionedCidrs> getProvisionedCidrs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>>

A list of cidrs representing the address space available for allocation in this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#provisioned_cidrs Ec2IpamPool#provisioned_cidrs}

---

##### `publicIpSource`<sup>Optional</sup> <a name="publicIpSource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publicIpSource"></a>

```java
public java.lang.String getPublicIpSource();
```

- *Type:* java.lang.String

The IP address source for pools in the public scope.

Only used for provisioning IP address CIDRs to pools in the public scope. Default is `byoip`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#public_ip_source Ec2IpamPool#public_ip_source}

---

##### `publiclyAdvertisable`<sup>Optional</sup> <a name="publiclyAdvertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publiclyAdvertisable"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAdvertisable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines whether or not address space from this pool is publicly advertised.

Must be set if and only if the pool is IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#publicly_advertisable Ec2IpamPool#publicly_advertisable}

---

##### `sourceIpamPoolId`<sup>Optional</sup> <a name="sourceIpamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceIpamPoolId"></a>

```java
public java.lang.String getSourceIpamPoolId();
```

- *Type:* java.lang.String

The Id of this pool's source.

If set, all space provisioned in this pool must be free space provisioned in the parent pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#source_ipam_pool_id Ec2IpamPool#source_ipam_pool_id}

---

##### `sourceResource`<sup>Optional</sup> <a name="sourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceResource"></a>

```java
public Ec2IpamPoolSourceResource getSourceResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

The resource associated with this pool's space.

Depending on the ResourceType, setting a SourceResource changes which space can be provisioned in this pool and which types of resources can receive allocations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#source_resource Ec2IpamPool#source_resource}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2IpamPoolTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#tags Ec2IpamPool#tags}

---

### Ec2IpamPoolProvisionedCidrs <a name="Ec2IpamPoolProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolProvisionedCidrs;

Ec2IpamPoolProvisionedCidrs.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Represents a single IPv4 or IPv6 CIDR. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Represents a single IPv4 or IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#cidr Ec2IpamPool#cidr}

---

### Ec2IpamPoolSourceResource <a name="Ec2IpamPoolSourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolSourceResource;

Ec2IpamPoolSourceResource.builder()
//  .resourceId(java.lang.String)
//  .resourceOwner(java.lang.String)
//  .resourceRegion(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#resource_id Ec2IpamPool#resource_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceOwner">resourceOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#resource_owner Ec2IpamPool#resource_owner}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceRegion">resourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#resource_region Ec2IpamPool#resource_region}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#resource_type Ec2IpamPool#resource_type}. |

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#resource_id Ec2IpamPool#resource_id}.

---

##### `resourceOwner`<sup>Optional</sup> <a name="resourceOwner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceOwner"></a>

```java
public java.lang.String getResourceOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#resource_owner Ec2IpamPool#resource_owner}.

---

##### `resourceRegion`<sup>Optional</sup> <a name="resourceRegion" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceRegion"></a>

```java
public java.lang.String getResourceRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#resource_region Ec2IpamPool#resource_region}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#resource_type Ec2IpamPool#resource_type}.

---

### Ec2IpamPoolTags <a name="Ec2IpamPoolTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolTags;

Ec2IpamPoolTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#key Ec2IpamPool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_pool#value Ec2IpamPool#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamPoolAllocationResourceTagsList <a name="Ec2IpamPoolAllocationResourceTagsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolAllocationResourceTagsList;

new Ec2IpamPoolAllocationResourceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get"></a>

```java
public Ec2IpamPoolAllocationResourceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2IpamPoolAllocationResourceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>>

---


### Ec2IpamPoolAllocationResourceTagsOutputReference <a name="Ec2IpamPoolAllocationResourceTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolAllocationResourceTagsOutputReference;

new Ec2IpamPoolAllocationResourceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2IpamPoolAllocationResourceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>

---


### Ec2IpamPoolProvisionedCidrsList <a name="Ec2IpamPoolProvisionedCidrsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolProvisionedCidrsList;

new Ec2IpamPoolProvisionedCidrsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get"></a>

```java
public Ec2IpamPoolProvisionedCidrsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2IpamPoolProvisionedCidrs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>>

---


### Ec2IpamPoolProvisionedCidrsOutputReference <a name="Ec2IpamPoolProvisionedCidrsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolProvisionedCidrsOutputReference;

new Ec2IpamPoolProvisionedCidrsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2IpamPoolProvisionedCidrs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>

---


### Ec2IpamPoolSourceResourceOutputReference <a name="Ec2IpamPoolSourceResourceOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolSourceResourceOutputReference;

new Ec2IpamPoolSourceResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceOwner">resetResourceOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceRegion">resetResourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetResourceOwner` <a name="resetResourceOwner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceOwner"></a>

```java
public void resetResourceOwner()
```

##### `resetResourceRegion` <a name="resetResourceRegion" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceRegion"></a>

```java
public void resetResourceRegion()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwnerInput">resourceOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegionInput">resourceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwner">resourceOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceOwnerInput`<sup>Optional</sup> <a name="resourceOwnerInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwnerInput"></a>

```java
public java.lang.String getResourceOwnerInput();
```

- *Type:* java.lang.String

---

##### `resourceRegionInput`<sup>Optional</sup> <a name="resourceRegionInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegionInput"></a>

```java
public java.lang.String getResourceRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwner"></a>

```java
public java.lang.String getResourceOwner();
```

- *Type:* java.lang.String

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegion"></a>

```java
public java.lang.String getResourceRegion();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2IpamPoolSourceResource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

---


### Ec2IpamPoolTagsList <a name="Ec2IpamPoolTagsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolTagsList;

new Ec2IpamPoolTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get"></a>

```java
public Ec2IpamPoolTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2IpamPoolTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>>

---


### Ec2IpamPoolTagsOutputReference <a name="Ec2IpamPoolTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_ipam_pool.Ec2IpamPoolTagsOutputReference;

new Ec2IpamPoolTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2IpamPoolTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>

---



