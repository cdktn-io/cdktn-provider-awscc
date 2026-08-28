# `dataAwsccRoute53HealthCheck` Submodule <a name="`dataAwsccRoute53HealthCheck` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53HealthCheck <a name="DataAwsccRoute53HealthCheck" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53_health_check awscc_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

dataawsccroute53healthcheck.NewDataAwsccRoute53HealthCheck(scope Construct, id *string, config DataAwsccRoute53HealthCheckConfig) DataAwsccRoute53HealthCheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig">DataAwsccRoute53HealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig">DataAwsccRoute53HealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53HealthCheck resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

dataawsccroute53healthcheck.DataAwsccRoute53HealthCheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

dataawsccroute53healthcheck.DataAwsccRoute53HealthCheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

dataawsccroute53healthcheck.DataAwsccRoute53HealthCheck_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

dataawsccroute53healthcheck.DataAwsccRoute53HealthCheck_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53HealthCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53HealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53HealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53HealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference">DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckId">HealthCheckId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckTags">HealthCheckTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList">DataAwsccRoute53HealthCheckHealthCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckConfig"></a>

```go
func HealthCheckConfig() DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference">DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference</a>

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckId"></a>

```go
func HealthCheckId() *string
```

- *Type:* *string

---

##### `HealthCheckTags`<sup>Required</sup> <a name="HealthCheckTags" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.healthCheckTags"></a>

```go
func HealthCheckTags() DataAwsccRoute53HealthCheckHealthCheckTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList">DataAwsccRoute53HealthCheckHealthCheckTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53HealthCheckConfig <a name="DataAwsccRoute53HealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

&dataawsccroute53healthcheck.DataAwsccRoute53HealthCheckConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53_health_check#id DataAwsccRoute53HealthCheck#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53HealthCheckHealthCheckConfig <a name="DataAwsccRoute53HealthCheckHealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

&dataawsccroute53healthcheck.DataAwsccRoute53HealthCheckHealthCheckConfig {

}
```


### DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier <a name="DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

&dataawsccroute53healthcheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier {

}
```


### DataAwsccRoute53HealthCheckHealthCheckTags <a name="DataAwsccRoute53HealthCheckHealthCheckTags" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

&dataawsccroute53healthcheck.DataAwsccRoute53HealthCheckHealthCheckTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference <a name="DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

dataawsccroute53healthcheck.NewDataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier">DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier">DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---


### DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference <a name="DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

dataawsccroute53healthcheck.NewDataAwsccRoute53HealthCheckHealthCheckConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier">AlarmIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks">ChildHealthChecks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.enableSni">EnableSni</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName">FullyQualifiedDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold">HealthThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus">InsufficientDataHealthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.inverted">Inverted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.measureLatency">MeasureLatency</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.requestInterval">RequestInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.resourcePath">ResourcePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn">RoutingControlArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.searchString">SearchString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfig">DataAwsccRoute53HealthCheckHealthCheckConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmIdentifier`<sup>Required</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier"></a>

```go
func AlarmIdentifier() DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a>

---

##### `ChildHealthChecks`<sup>Required</sup> <a name="ChildHealthChecks" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks"></a>

```go
func ChildHealthChecks() *[]*string
```

- *Type:* *[]*string

---

##### `EnableSni`<sup>Required</sup> <a name="EnableSni" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.enableSni"></a>

```go
func EnableSni() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `FullyQualifiedDomainName`<sup>Required</sup> <a name="FullyQualifiedDomainName" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName"></a>

```go
func FullyQualifiedDomainName() *string
```

- *Type:* *string

---

##### `HealthThreshold`<sup>Required</sup> <a name="HealthThreshold" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold"></a>

```go
func HealthThreshold() *f64
```

- *Type:* *f64

---

##### `InsufficientDataHealthStatus`<sup>Required</sup> <a name="InsufficientDataHealthStatus" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus"></a>

```go
func InsufficientDataHealthStatus() *string
```

- *Type:* *string

---

##### `Inverted`<sup>Required</sup> <a name="Inverted" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.inverted"></a>

```go
func Inverted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `MeasureLatency`<sup>Required</sup> <a name="MeasureLatency" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.measureLatency"></a>

```go
func MeasureLatency() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RequestInterval`<sup>Required</sup> <a name="RequestInterval" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.requestInterval"></a>

```go
func RequestInterval() *f64
```

- *Type:* *f64

---

##### `ResourcePath`<sup>Required</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.resourcePath"></a>

```go
func ResourcePath() *string
```

- *Type:* *string

---

##### `RoutingControlArn`<sup>Required</sup> <a name="RoutingControlArn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn"></a>

```go
func RoutingControlArn() *string
```

- *Type:* *string

---

##### `SearchString`<sup>Required</sup> <a name="SearchString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.searchString"></a>

```go
func SearchString() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53HealthCheckHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckConfig">DataAwsccRoute53HealthCheckHealthCheckConfig</a>

---


### DataAwsccRoute53HealthCheckHealthCheckTagsList <a name="DataAwsccRoute53HealthCheckHealthCheckTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

dataawsccroute53healthcheck.NewDataAwsccRoute53HealthCheckHealthCheckTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53HealthCheckHealthCheckTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference <a name="DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53healthcheck"

dataawsccroute53healthcheck.NewDataAwsccRoute53HealthCheckHealthCheckTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTags">DataAwsccRoute53HealthCheckHealthCheckTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53HealthCheckHealthCheckTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheck.DataAwsccRoute53HealthCheckHealthCheckTags">DataAwsccRoute53HealthCheckHealthCheckTags</a>

---



