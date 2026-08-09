# `dataAwsccCloudfrontVpcOrigin` Submodule <a name="`dataAwsccCloudfrontVpcOrigin` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontVpcOrigin <a name="DataAwsccCloudfrontVpcOrigin" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_vpc_origin awscc_cloudfront_vpc_origin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontvpcorigin"

dataawscccloudfrontvpcorigin.NewDataAwsccCloudfrontVpcOrigin(scope Construct, id *string, config DataAwsccCloudfrontVpcOriginConfig) DataAwsccCloudfrontVpcOrigin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig">DataAwsccCloudfrontVpcOriginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig">DataAwsccCloudfrontVpcOriginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontVpcOrigin resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontvpcorigin"

dataawscccloudfrontvpcorigin.DataAwsccCloudfrontVpcOrigin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontvpcorigin"

dataawscccloudfrontvpcorigin.DataAwsccCloudfrontVpcOrigin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontvpcorigin"

dataawscccloudfrontvpcorigin.DataAwsccCloudfrontVpcOrigin_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontvpcorigin"

dataawscccloudfrontvpcorigin.DataAwsccCloudfrontVpcOrigin_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCloudfrontVpcOrigin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCloudfrontVpcOrigin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCloudfrontVpcOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_vpc_origin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontVpcOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList">DataAwsccCloudfrontVpcOriginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginEndpointConfig">VpcOriginEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginId">VpcOriginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tags"></a>

```go
func Tags() DataAwsccCloudfrontVpcOriginTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList">DataAwsccCloudfrontVpcOriginTagsList</a>

---

##### `VpcOriginEndpointConfig`<sup>Required</sup> <a name="VpcOriginEndpointConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginEndpointConfig"></a>

```go
func VpcOriginEndpointConfig() DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference</a>

---

##### `VpcOriginId`<sup>Required</sup> <a name="VpcOriginId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginId"></a>

```go
func VpcOriginId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontVpcOriginConfig <a name="DataAwsccCloudfrontVpcOriginConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontvpcorigin"

&dataawscccloudfrontvpcorigin.DataAwsccCloudfrontVpcOriginConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_vpc_origin#id DataAwsccCloudfrontVpcOrigin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontVpcOriginTags <a name="DataAwsccCloudfrontVpcOriginTags" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontvpcorigin"

&dataawscccloudfrontvpcorigin.DataAwsccCloudfrontVpcOriginTags {

}
```


### DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig <a name="DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontvpcorigin"

&dataawscccloudfrontvpcorigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontVpcOriginTagsList <a name="DataAwsccCloudfrontVpcOriginTagsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontvpcorigin"

dataawscccloudfrontvpcorigin.NewDataAwsccCloudfrontVpcOriginTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudfrontVpcOriginTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudfrontVpcOriginTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudfrontVpcOriginTagsOutputReference <a name="DataAwsccCloudfrontVpcOriginTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontvpcorigin"

dataawscccloudfrontvpcorigin.NewDataAwsccCloudfrontVpcOriginTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudfrontVpcOriginTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags">DataAwsccCloudfrontVpcOriginTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontVpcOriginTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags">DataAwsccCloudfrontVpcOriginTags</a>

---


### DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference <a name="DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontvpcorigin"

dataawscccloudfrontvpcorigin.NewDataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort">HttpPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy">OriginProtocolPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols">OriginSslProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort"></a>

```go
func HttpPort() *f64
```

- *Type:* *f64

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort"></a>

```go
func HttpsPort() *f64
```

- *Type:* *f64

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OriginProtocolPolicy`<sup>Required</sup> <a name="OriginProtocolPolicy" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy"></a>

```go
func OriginProtocolPolicy() *string
```

- *Type:* *string

---

##### `OriginSslProtocols`<sup>Required</sup> <a name="OriginSslProtocols" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols"></a>

```go
func OriginSslProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig</a>

---



