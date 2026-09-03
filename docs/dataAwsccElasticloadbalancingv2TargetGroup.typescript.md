# `dataAwsccElasticloadbalancingv2TargetGroup` Submodule <a name="`dataAwsccElasticloadbalancingv2TargetGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticloadbalancingv2TargetGroup <a name="DataAwsccElasticloadbalancingv2TargetGroup" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elasticloadbalancingv2_target_group awscc_elasticloadbalancingv2_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup(scope: Construct, id: string, config: DataAwsccElasticloadbalancingv2TargetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig">DataAwsccElasticloadbalancingv2TargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig">DataAwsccElasticloadbalancingv2TargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2TargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isConstruct"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformElement"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2TargetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticloadbalancingv2TargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticloadbalancingv2TargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elasticloadbalancingv2_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticloadbalancingv2TargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckEnabled">healthCheckEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckPort">healthCheckPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckProtocol">healthCheckProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSeconds">healthCheckTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.loadBalancerArns">loadBalancerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.matcher">matcher</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference">DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList">DataAwsccElasticloadbalancingv2TargetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetControlPort">targetControlPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupAttributes">targetGroupAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList">DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupFullName">targetGroupFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupName">targetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList">DataAwsccElasticloadbalancingv2TargetGroupTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `healthCheckEnabled`<sup>Required</sup> <a name="healthCheckEnabled" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckEnabled"></a>

```typescript
public readonly healthCheckEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `healthCheckIntervalSeconds`<sup>Required</sup> <a name="healthCheckIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckIntervalSeconds"></a>

```typescript
public readonly healthCheckIntervalSeconds: number;
```

- *Type:* number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `healthCheckPort`<sup>Required</sup> <a name="healthCheckPort" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckPort"></a>

```typescript
public readonly healthCheckPort: string;
```

- *Type:* string

---

##### `healthCheckProtocol`<sup>Required</sup> <a name="healthCheckProtocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckProtocol"></a>

```typescript
public readonly healthCheckProtocol: string;
```

- *Type:* string

---

##### `healthCheckTimeoutSeconds`<sup>Required</sup> <a name="healthCheckTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSeconds"></a>

```typescript
public readonly healthCheckTimeoutSeconds: number;
```

- *Type:* number

---

##### `healthyThresholdCount`<sup>Required</sup> <a name="healthyThresholdCount" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthyThresholdCount"></a>

```typescript
public readonly healthyThresholdCount: number;
```

- *Type:* number

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `loadBalancerArns`<sup>Required</sup> <a name="loadBalancerArns" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.loadBalancerArns"></a>

```typescript
public readonly loadBalancerArns: string[];
```

- *Type:* string[]

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.matcher"></a>

```typescript
public readonly matcher: DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference">DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccElasticloadbalancingv2TargetGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList">DataAwsccElasticloadbalancingv2TargetGroupTagsList</a>

---

##### `targetControlPort`<sup>Required</sup> <a name="targetControlPort" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetControlPort"></a>

```typescript
public readonly targetControlPort: number;
```

- *Type:* number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `targetGroupAttributes`<sup>Required</sup> <a name="targetGroupAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupAttributes"></a>

```typescript
public readonly targetGroupAttributes: DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList">DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList</a>

---

##### `targetGroupFullName`<sup>Required</sup> <a name="targetGroupFullName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupFullName"></a>

```typescript
public readonly targetGroupFullName: string;
```

- *Type:* string

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupName"></a>

```typescript
public readonly targetGroupName: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targets"></a>

```typescript
public readonly targets: DataAwsccElasticloadbalancingv2TargetGroupTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList">DataAwsccElasticloadbalancingv2TargetGroupTargetsList</a>

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `unhealthyThresholdCount`<sup>Required</sup> <a name="unhealthyThresholdCount" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.unhealthyThresholdCount"></a>

```typescript
public readonly unhealthyThresholdCount: number;
```

- *Type:* number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticloadbalancingv2TargetGroupConfig <a name="DataAwsccElasticloadbalancingv2TargetGroupConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingv2TargetGroupConfig: dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elasticloadbalancingv2_target_group#id DataAwsccElasticloadbalancingv2TargetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticloadbalancingv2TargetGroupMatcher <a name="DataAwsccElasticloadbalancingv2TargetGroupMatcher" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcher.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingv2TargetGroupMatcher: dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcher = { ... }
```


### DataAwsccElasticloadbalancingv2TargetGroupTags <a name="DataAwsccElasticloadbalancingv2TargetGroupTags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTags.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingv2TargetGroupTags: dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTags = { ... }
```


### DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes <a name="DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes: dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes = { ... }
```


### DataAwsccElasticloadbalancingv2TargetGroupTargets <a name="DataAwsccElasticloadbalancingv2TargetGroupTargets" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargets.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingv2TargetGroupTargets: dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference <a name="DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCode">grpcCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCode">httpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcher">DataAwsccElasticloadbalancingv2TargetGroupMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpcCode`<sup>Required</sup> <a name="grpcCode" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCode"></a>

```typescript
public readonly grpcCode: string;
```

- *Type:* string

---

##### `httpCode`<sup>Required</sup> <a name="httpCode" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCode"></a>

```typescript
public readonly httpCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingv2TargetGroupMatcher;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcher">DataAwsccElasticloadbalancingv2TargetGroupMatcher</a>

---


### DataAwsccElasticloadbalancingv2TargetGroupTagsList <a name="DataAwsccElasticloadbalancingv2TargetGroupTagsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference <a name="DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTags">DataAwsccElasticloadbalancingv2TargetGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingv2TargetGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTags">DataAwsccElasticloadbalancingv2TargetGroupTags</a>

---


### DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList <a name="DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference <a name="DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes">DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes">DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes</a>

---


### DataAwsccElasticloadbalancingv2TargetGroupTargetsList <a name="DataAwsccElasticloadbalancingv2TargetGroupTargetsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference <a name="DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2TargetGroup } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerId">quicServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargets">DataAwsccElasticloadbalancingv2TargetGroupTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `quicServerId`<sup>Required</sup> <a name="quicServerId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerId"></a>

```typescript
public readonly quicServerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingv2TargetGroupTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargets">DataAwsccElasticloadbalancingv2TargetGroupTargets</a>

---



