# `dataAwsccOpensearchmemorySpace` Submodule <a name="`dataAwsccOpensearchmemorySpace` Submodule" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpensearchmemorySpace <a name="DataAwsccOpensearchmemorySpace" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/opensearchmemory_space awscc_opensearchmemory_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

dataawsccopensearchmemoryspace.NewDataAwsccOpensearchmemorySpace(scope Construct, id *string, config DataAwsccOpensearchmemorySpaceConfig) DataAwsccOpensearchmemorySpace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig">DataAwsccOpensearchmemorySpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig">DataAwsccOpensearchmemorySpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOpensearchmemorySpace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

dataawsccopensearchmemoryspace.DataAwsccOpensearchmemorySpace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

dataawsccopensearchmemoryspace.DataAwsccOpensearchmemorySpace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

dataawsccopensearchmemoryspace.DataAwsccOpensearchmemorySpace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

dataawsccopensearchmemoryspace.DataAwsccOpensearchmemorySpace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccOpensearchmemorySpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccOpensearchmemorySpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccOpensearchmemorySpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/opensearchmemory_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpensearchmemorySpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference">DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.eventExpiryDays">EventExpiryDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.extractionModelId">ExtractionModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryExpiryDays">MemoryExpiryDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryStrategies">MemoryStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList">DataAwsccOpensearchmemorySpaceMemoryStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.spaceId">SpaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList">DataAwsccOpensearchmemorySpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference">DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference</a>

---

##### `EventExpiryDays`<sup>Required</sup> <a name="EventExpiryDays" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.eventExpiryDays"></a>

```go
func EventExpiryDays() *f64
```

- *Type:* *f64

---

##### `ExtractionModelId`<sup>Required</sup> <a name="ExtractionModelId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.extractionModelId"></a>

```go
func ExtractionModelId() *string
```

- *Type:* *string

---

##### `MemoryExpiryDays`<sup>Required</sup> <a name="MemoryExpiryDays" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryExpiryDays"></a>

```go
func MemoryExpiryDays() *f64
```

- *Type:* *f64

---

##### `MemoryStrategies`<sup>Required</sup> <a name="MemoryStrategies" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryStrategies"></a>

```go
func MemoryStrategies() DataAwsccOpensearchmemorySpaceMemoryStrategiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList">DataAwsccOpensearchmemorySpaceMemoryStrategiesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.spaceId"></a>

```go
func SpaceId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tags"></a>

```go
func Tags() DataAwsccOpensearchmemorySpaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList">DataAwsccOpensearchmemorySpaceTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpensearchmemorySpaceConfig <a name="DataAwsccOpensearchmemorySpaceConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

&dataawsccopensearchmemoryspace.DataAwsccOpensearchmemorySpaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/opensearchmemory_space#id DataAwsccOpensearchmemorySpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpensearchmemorySpaceEncryptionConfiguration <a name="DataAwsccOpensearchmemorySpaceEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

&dataawsccopensearchmemoryspace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration {

}
```


### DataAwsccOpensearchmemorySpaceMemoryStrategies <a name="DataAwsccOpensearchmemorySpaceMemoryStrategies" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

&dataawsccopensearchmemoryspace.DataAwsccOpensearchmemorySpaceMemoryStrategies {

}
```


### DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

&dataawsccopensearchmemoryspace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration {

}
```


### DataAwsccOpensearchmemorySpaceTags <a name="DataAwsccOpensearchmemorySpaceTags" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

&dataawsccopensearchmemoryspace.DataAwsccOpensearchmemorySpaceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference <a name="DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

dataawsccopensearchmemoryspace.NewDataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration">DataAwsccOpensearchmemorySpaceEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchmemorySpaceEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration">DataAwsccOpensearchmemorySpaceEncryptionConfiguration</a>

---


### DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

dataawsccopensearchmemoryspace.NewDataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled">ConsolidationEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages">ExtractEveryNMessages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens">ExtractEveryNTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt">ExtractionPrompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN">ExtractionSeedRecentN</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK">ExtractionSeedTopK</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds">IdleTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsolidationEnabled`<sup>Required</sup> <a name="ConsolidationEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled"></a>

```go
func ConsolidationEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExtractEveryNMessages`<sup>Required</sup> <a name="ExtractEveryNMessages" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages"></a>

```go
func ExtractEveryNMessages() *f64
```

- *Type:* *f64

---

##### `ExtractEveryNTokens`<sup>Required</sup> <a name="ExtractEveryNTokens" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens"></a>

```go
func ExtractEveryNTokens() *f64
```

- *Type:* *f64

---

##### `ExtractionPrompt`<sup>Required</sup> <a name="ExtractionPrompt" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt"></a>

```go
func ExtractionPrompt() *string
```

- *Type:* *string

---

##### `ExtractionSeedRecentN`<sup>Required</sup> <a name="ExtractionSeedRecentN" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN"></a>

```go
func ExtractionSeedRecentN() *f64
```

- *Type:* *f64

---

##### `ExtractionSeedTopK`<sup>Required</sup> <a name="ExtractionSeedTopK" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK"></a>

```go
func ExtractionSeedTopK() *f64
```

- *Type:* *f64

---

##### `IdleTimeoutSeconds`<sup>Required</sup> <a name="IdleTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds"></a>

```go
func IdleTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---


### DataAwsccOpensearchmemorySpaceMemoryStrategiesList <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesList" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

dataawsccopensearchmemoryspace.NewDataAwsccOpensearchmemorySpaceMemoryStrategiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOpensearchmemorySpaceMemoryStrategiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.get"></a>

```go
func Get(index *f64) DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

dataawsccopensearchmemoryspace.NewDataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies">DataAwsccOpensearchmemorySpaceMemoryStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration"></a>

```go
func Configuration() DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchmemorySpaceMemoryStrategies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies">DataAwsccOpensearchmemorySpaceMemoryStrategies</a>

---


### DataAwsccOpensearchmemorySpaceTagsList <a name="DataAwsccOpensearchmemorySpaceTagsList" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

dataawsccopensearchmemoryspace.NewDataAwsccOpensearchmemorySpaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOpensearchmemorySpaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccOpensearchmemorySpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOpensearchmemorySpaceTagsOutputReference <a name="DataAwsccOpensearchmemorySpaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccopensearchmemoryspace"

dataawsccopensearchmemoryspace.NewDataAwsccOpensearchmemorySpaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOpensearchmemorySpaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags">DataAwsccOpensearchmemorySpaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchmemorySpaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags">DataAwsccOpensearchmemorySpaceTags</a>

---



