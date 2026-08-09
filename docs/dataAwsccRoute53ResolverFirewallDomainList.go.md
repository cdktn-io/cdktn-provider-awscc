# `dataAwsccRoute53ResolverFirewallDomainList` Submodule <a name="`dataAwsccRoute53ResolverFirewallDomainList` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53ResolverFirewallDomainList <a name="DataAwsccRoute53ResolverFirewallDomainList" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53resolver_firewall_domain_list awscc_route53resolver_firewall_domain_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewalldomainlist"

dataawsccroute53resolverfirewalldomainlist.NewDataAwsccRoute53ResolverFirewallDomainList(scope Construct, id *string, config DataAwsccRoute53ResolverFirewallDomainListConfig) DataAwsccRoute53ResolverFirewallDomainList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig">DataAwsccRoute53ResolverFirewallDomainListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig">DataAwsccRoute53ResolverFirewallDomainListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53ResolverFirewallDomainList resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewalldomainlist"

dataawsccroute53resolverfirewalldomainlist.DataAwsccRoute53ResolverFirewallDomainList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewalldomainlist"

dataawsccroute53resolverfirewalldomainlist.DataAwsccRoute53ResolverFirewallDomainList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewalldomainlist"

dataawsccroute53resolverfirewalldomainlist.DataAwsccRoute53ResolverFirewallDomainList_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewalldomainlist"

dataawsccroute53resolverfirewalldomainlist.DataAwsccRoute53ResolverFirewallDomainList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53ResolverFirewallDomainList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53ResolverFirewallDomainList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53ResolverFirewallDomainList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53resolver_firewall_domain_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53ResolverFirewallDomainList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.creatorRequestId">CreatorRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domainCount">DomainCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domainFileUrl">DomainFileUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.managedOwnerName">ManagedOwnerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.modificationTime">ModificationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList">DataAwsccRoute53ResolverFirewallDomainListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `CreatorRequestId`<sup>Required</sup> <a name="CreatorRequestId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.creatorRequestId"></a>

```go
func CreatorRequestId() *string
```

- *Type:* *string

---

##### `DomainCount`<sup>Required</sup> <a name="DomainCount" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domainCount"></a>

```go
func DomainCount() *f64
```

- *Type:* *f64

---

##### `DomainFileUrl`<sup>Required</sup> <a name="DomainFileUrl" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domainFileUrl"></a>

```go
func DomainFileUrl() *string
```

- *Type:* *string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `FirewallDomainListId`<sup>Required</sup> <a name="FirewallDomainListId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.firewallDomainListId"></a>

```go
func FirewallDomainListId() *string
```

- *Type:* *string

---

##### `ManagedOwnerName`<sup>Required</sup> <a name="ManagedOwnerName" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.managedOwnerName"></a>

```go
func ManagedOwnerName() *string
```

- *Type:* *string

---

##### `ModificationTime`<sup>Required</sup> <a name="ModificationTime" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.modificationTime"></a>

```go
func ModificationTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.tags"></a>

```go
func Tags() DataAwsccRoute53ResolverFirewallDomainListTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList">DataAwsccRoute53ResolverFirewallDomainListTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53ResolverFirewallDomainListConfig <a name="DataAwsccRoute53ResolverFirewallDomainListConfig" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewalldomainlist"

&dataawsccroute53resolverfirewalldomainlist.DataAwsccRoute53ResolverFirewallDomainListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53resolver_firewall_domain_list#id DataAwsccRoute53ResolverFirewallDomainList#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53ResolverFirewallDomainListTags <a name="DataAwsccRoute53ResolverFirewallDomainListTags" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewalldomainlist"

&dataawsccroute53resolverfirewalldomainlist.DataAwsccRoute53ResolverFirewallDomainListTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53ResolverFirewallDomainListTagsList <a name="DataAwsccRoute53ResolverFirewallDomainListTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewalldomainlist"

dataawsccroute53resolverfirewalldomainlist.NewDataAwsccRoute53ResolverFirewallDomainListTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53ResolverFirewallDomainListTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference <a name="DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewalldomainlist"

dataawsccroute53resolverfirewalldomainlist.NewDataAwsccRoute53ResolverFirewallDomainListTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTags">DataAwsccRoute53ResolverFirewallDomainListTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53ResolverFirewallDomainListTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallDomainList.DataAwsccRoute53ResolverFirewallDomainListTags">DataAwsccRoute53ResolverFirewallDomainListTags</a>

---



