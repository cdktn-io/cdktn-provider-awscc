# `dataAwsccRdsDbProxyTargetGroup` Submodule <a name="`dataAwsccRdsDbProxyTargetGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRdsDbProxyTargetGroup <a name="DataAwsccRdsDbProxyTargetGroup" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rds_db_proxy_target_group awscc_rds_db_proxy_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbproxytargetgroup"

dataawsccrdsdbproxytargetgroup.NewDataAwsccRdsDbProxyTargetGroup(scope Construct, id *string, config DataAwsccRdsDbProxyTargetGroupConfig) DataAwsccRdsDbProxyTargetGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig">DataAwsccRdsDbProxyTargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig">DataAwsccRdsDbProxyTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbproxytargetgroup"

dataawsccrdsdbproxytargetgroup.DataAwsccRdsDbProxyTargetGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbproxytargetgroup"

dataawsccrdsdbproxytargetgroup.DataAwsccRdsDbProxyTargetGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbproxytargetgroup"

dataawsccrdsdbproxytargetgroup.DataAwsccRdsDbProxyTargetGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbproxytargetgroup"

dataawsccrdsdbproxytargetgroup.DataAwsccRdsDbProxyTargetGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRdsDbProxyTargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRdsDbProxyTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rds_db_proxy_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRdsDbProxyTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo">ConnectionPoolConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbClusterIdentifiers">DbClusterIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbInstanceIdentifiers">DbInstanceIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbProxyName">DbProxyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupName">TargetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ConnectionPoolConfigurationInfo`<sup>Required</sup> <a name="ConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo"></a>

```go
func ConnectionPoolConfigurationInfo() DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a>

---

##### `DbClusterIdentifiers`<sup>Required</sup> <a name="DbClusterIdentifiers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbClusterIdentifiers"></a>

```go
func DbClusterIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `DbInstanceIdentifiers`<sup>Required</sup> <a name="DbInstanceIdentifiers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbInstanceIdentifiers"></a>

```go
func DbInstanceIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `DbProxyName`<sup>Required</sup> <a name="DbProxyName" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbProxyName"></a>

```go
func DbProxyName() *string
```

- *Type:* *string

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `TargetGroupName`<sup>Required</sup> <a name="TargetGroupName" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupName"></a>

```go
func TargetGroupName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRdsDbProxyTargetGroupConfig <a name="DataAwsccRdsDbProxyTargetGroupConfig" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbproxytargetgroup"

&dataawsccrdsdbproxytargetgroup.DataAwsccRdsDbProxyTargetGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rds_db_proxy_target_group#id DataAwsccRdsDbProxyTargetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo <a name="DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbproxytargetgroup"

&dataawsccrdsdbproxytargetgroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference <a name="DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbproxytargetgroup"

dataawsccrdsdbproxytargetgroup.NewDataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout">ConnectionBorrowTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery">InitQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent">MaxConnectionsPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent">MaxIdleConnectionsPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters">SessionPinningFilters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionBorrowTimeout`<sup>Required</sup> <a name="ConnectionBorrowTimeout" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout"></a>

```go
func ConnectionBorrowTimeout() *f64
```

- *Type:* *f64

---

##### `InitQuery`<sup>Required</sup> <a name="InitQuery" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery"></a>

```go
func InitQuery() *string
```

- *Type:* *string

---

##### `MaxConnectionsPercent`<sup>Required</sup> <a name="MaxConnectionsPercent" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent"></a>

```go
func MaxConnectionsPercent() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsPercent`<sup>Required</sup> <a name="MaxIdleConnectionsPercent" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent"></a>

```go
func MaxIdleConnectionsPercent() *f64
```

- *Type:* *f64

---

##### `SessionPinningFilters`<sup>Required</sup> <a name="SessionPinningFilters" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters"></a>

```go
func SessionPinningFilters() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---



