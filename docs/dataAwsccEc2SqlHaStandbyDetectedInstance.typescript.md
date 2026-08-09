# `dataAwsccEc2SqlHaStandbyDetectedInstance` Submodule <a name="`dataAwsccEc2SqlHaStandbyDetectedInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2SqlHaStandbyDetectedInstance <a name="DataAwsccEc2SqlHaStandbyDetectedInstance" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_sql_ha_standby_detected_instance awscc_ec2_sql_ha_standby_detected_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.Initializer"></a>

```typescript
import { dataAwsccEc2SqlHaStandbyDetectedInstance } from '@cdktn/provider-awscc'

new dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance(scope: Construct, id: string, config: DataAwsccEc2SqlHaStandbyDetectedInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig">DataAwsccEc2SqlHaStandbyDetectedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig">DataAwsccEc2SqlHaStandbyDetectedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2SqlHaStandbyDetectedInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isConstruct"></a>

```typescript
import { dataAwsccEc2SqlHaStandbyDetectedInstance } from '@cdktn/provider-awscc'

dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isTerraformElement"></a>

```typescript
import { dataAwsccEc2SqlHaStandbyDetectedInstance } from '@cdktn/provider-awscc'

dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2SqlHaStandbyDetectedInstance } from '@cdktn/provider-awscc'

dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2SqlHaStandbyDetectedInstance } from '@cdktn/provider-awscc'

dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2SqlHaStandbyDetectedInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2SqlHaStandbyDetectedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2SqlHaStandbyDetectedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_sql_ha_standby_detected_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2SqlHaStandbyDetectedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.haStatus">haStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.sqlServerCredentials">sqlServerCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.sqlServerLicenseUsage">sqlServerLicenseUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `haStatus`<sup>Required</sup> <a name="haStatus" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.haStatus"></a>

```typescript
public readonly haStatus: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `sqlServerCredentials`<sup>Required</sup> <a name="sqlServerCredentials" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.sqlServerCredentials"></a>

```typescript
public readonly sqlServerCredentials: string;
```

- *Type:* string

---

##### `sqlServerLicenseUsage`<sup>Required</sup> <a name="sqlServerLicenseUsage" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.sqlServerLicenseUsage"></a>

```typescript
public readonly sqlServerLicenseUsage: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2SqlHaStandbyDetectedInstanceConfig <a name="DataAwsccEc2SqlHaStandbyDetectedInstanceConfig" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.Initializer"></a>

```typescript
import { dataAwsccEc2SqlHaStandbyDetectedInstance } from '@cdktn/provider-awscc'

const dataAwsccEc2SqlHaStandbyDetectedInstanceConfig: dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2SqlHaStandbyDetectedInstance.DataAwsccEc2SqlHaStandbyDetectedInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_sql_ha_standby_detected_instance#id DataAwsccEc2SqlHaStandbyDetectedInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



