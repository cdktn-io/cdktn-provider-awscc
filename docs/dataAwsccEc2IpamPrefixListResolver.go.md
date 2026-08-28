# `dataAwsccEc2IpamPrefixListResolver` Submodule <a name="`dataAwsccEc2IpamPrefixListResolver` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2IpamPrefixListResolver <a name="DataAwsccEc2IpamPrefixListResolver" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_ipam_prefix_list_resolver awscc_ec2_ipam_prefix_list_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.NewDataAwsccEc2IpamPrefixListResolver(scope Construct, id *string, config DataAwsccEc2IpamPrefixListResolverConfig) DataAwsccEc2IpamPrefixListResolver
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig">DataAwsccEc2IpamPrefixListResolverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig">DataAwsccEc2IpamPrefixListResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2IpamPrefixListResolver resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.DataAwsccEc2IpamPrefixListResolver_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.DataAwsccEc2IpamPrefixListResolver_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.DataAwsccEc2IpamPrefixListResolver_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.DataAwsccEc2IpamPrefixListResolver_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2IpamPrefixListResolver resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2IpamPrefixListResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2IpamPrefixListResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_ipam_prefix_list_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2IpamPrefixListResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamArn">IpamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamId">IpamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverArn">IpamPrefixListResolverArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverId">IpamPrefixListResolverId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList">DataAwsccEc2IpamPrefixListResolverRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList">DataAwsccEc2IpamPrefixListResolverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.addressFamily"></a>

```go
func AddressFamily() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IpamArn`<sup>Required</sup> <a name="IpamArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamArn"></a>

```go
func IpamArn() *string
```

- *Type:* *string

---

##### `IpamId`<sup>Required</sup> <a name="IpamId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamId"></a>

```go
func IpamId() *string
```

- *Type:* *string

---

##### `IpamPrefixListResolverArn`<sup>Required</sup> <a name="IpamPrefixListResolverArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverArn"></a>

```go
func IpamPrefixListResolverArn() *string
```

- *Type:* *string

---

##### `IpamPrefixListResolverId`<sup>Required</sup> <a name="IpamPrefixListResolverId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverId"></a>

```go
func IpamPrefixListResolverId() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.rules"></a>

```go
func Rules() DataAwsccEc2IpamPrefixListResolverRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList">DataAwsccEc2IpamPrefixListResolverRulesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tags"></a>

```go
func Tags() DataAwsccEc2IpamPrefixListResolverTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList">DataAwsccEc2IpamPrefixListResolverTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamPrefixListResolverConfig <a name="DataAwsccEc2IpamPrefixListResolverConfig" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

&dataawsccec2ipamprefixlistresolver.DataAwsccEc2IpamPrefixListResolverConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_ipam_prefix_list_resolver#id DataAwsccEc2IpamPrefixListResolver#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamPrefixListResolverRules <a name="DataAwsccEc2IpamPrefixListResolverRules" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

&dataawsccec2ipamprefixlistresolver.DataAwsccEc2IpamPrefixListResolverRules {

}
```


### DataAwsccEc2IpamPrefixListResolverRulesConditions <a name="DataAwsccEc2IpamPrefixListResolverRulesConditions" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

&dataawsccec2ipamprefixlistresolver.DataAwsccEc2IpamPrefixListResolverRulesConditions {

}
```


### DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

&dataawsccec2ipamprefixlistresolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag {

}
```


### DataAwsccEc2IpamPrefixListResolverTags <a name="DataAwsccEc2IpamPrefixListResolverTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

&dataawsccec2ipamprefixlistresolver.DataAwsccEc2IpamPrefixListResolverTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamPrefixListResolverRulesConditionsList <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.NewDataAwsccEc2IpamPrefixListResolverRulesConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2IpamPrefixListResolverRulesConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.NewDataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.ipamPoolId">IpamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceOwner">ResourceOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceTag">ResourceTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions">DataAwsccEc2IpamPrefixListResolverRulesConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.ipamPoolId"></a>

```go
func IpamPoolId() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceOwner"></a>

```go
func ResourceOwner() *string
```

- *Type:* *string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `ResourceTag`<sup>Required</sup> <a name="ResourceTag" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceTag"></a>

```go
func ResourceTag() DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2IpamPrefixListResolverRulesConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions">DataAwsccEc2IpamPrefixListResolverRulesConditions</a>

---


### DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.NewDataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag</a>

---


### DataAwsccEc2IpamPrefixListResolverRulesList <a name="DataAwsccEc2IpamPrefixListResolverRulesList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.NewDataAwsccEc2IpamPrefixListResolverRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2IpamPrefixListResolverRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2IpamPrefixListResolverRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2IpamPrefixListResolverRulesOutputReference <a name="DataAwsccEc2IpamPrefixListResolverRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.NewDataAwsccEc2IpamPrefixListResolverRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2IpamPrefixListResolverRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList">DataAwsccEc2IpamPrefixListResolverRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ipamScopeId">IpamScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ruleType">RuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.staticCidr">StaticCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules">DataAwsccEc2IpamPrefixListResolverRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.conditions"></a>

```go
func Conditions() DataAwsccEc2IpamPrefixListResolverRulesConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList">DataAwsccEc2IpamPrefixListResolverRulesConditionsList</a>

---

##### `IpamScopeId`<sup>Required</sup> <a name="IpamScopeId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ipamScopeId"></a>

```go
func IpamScopeId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ruleType"></a>

```go
func RuleType() *string
```

- *Type:* *string

---

##### `StaticCidr`<sup>Required</sup> <a name="StaticCidr" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.staticCidr"></a>

```go
func StaticCidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2IpamPrefixListResolverRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules">DataAwsccEc2IpamPrefixListResolverRules</a>

---


### DataAwsccEc2IpamPrefixListResolverTagsList <a name="DataAwsccEc2IpamPrefixListResolverTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.NewDataAwsccEc2IpamPrefixListResolverTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2IpamPrefixListResolverTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2IpamPrefixListResolverTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2IpamPrefixListResolverTagsOutputReference <a name="DataAwsccEc2IpamPrefixListResolverTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2ipamprefixlistresolver"

dataawsccec2ipamprefixlistresolver.NewDataAwsccEc2IpamPrefixListResolverTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2IpamPrefixListResolverTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags">DataAwsccEc2IpamPrefixListResolverTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2IpamPrefixListResolverTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags">DataAwsccEc2IpamPrefixListResolverTags</a>

---



