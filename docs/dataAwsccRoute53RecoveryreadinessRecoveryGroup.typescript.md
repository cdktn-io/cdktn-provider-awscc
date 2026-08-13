# `dataAwsccRoute53RecoveryreadinessRecoveryGroup` Submodule <a name="`dataAwsccRoute53RecoveryreadinessRecoveryGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53RecoveryreadinessRecoveryGroup <a name="DataAwsccRoute53RecoveryreadinessRecoveryGroup" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53recoveryreadiness_recovery_group awscc_route53recoveryreadiness_recovery_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoveryreadinessRecoveryGroup } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup(scope: Construct, id: string, config: DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig">DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig">DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53RecoveryreadinessRecoveryGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isConstruct"></a>

```typescript
import { dataAwsccRoute53RecoveryreadinessRecoveryGroup } from '@cdktn/provider-awscc'

dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isTerraformElement"></a>

```typescript
import { dataAwsccRoute53RecoveryreadinessRecoveryGroup } from '@cdktn/provider-awscc'

dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccRoute53RecoveryreadinessRecoveryGroup } from '@cdktn/provider-awscc'

dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccRoute53RecoveryreadinessRecoveryGroup } from '@cdktn/provider-awscc'

dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRoute53RecoveryreadinessRecoveryGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRoute53RecoveryreadinessRecoveryGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRoute53RecoveryreadinessRecoveryGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53recoveryreadiness_recovery_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53RecoveryreadinessRecoveryGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.cells">cells</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.recoveryGroupArn">recoveryGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.recoveryGroupName">recoveryGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList">DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cells`<sup>Required</sup> <a name="cells" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.cells"></a>

```typescript
public readonly cells: string[];
```

- *Type:* string[]

---

##### `recoveryGroupArn`<sup>Required</sup> <a name="recoveryGroupArn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.recoveryGroupArn"></a>

```typescript
public readonly recoveryGroupArn: string;
```

- *Type:* string

---

##### `recoveryGroupName`<sup>Required</sup> <a name="recoveryGroupName" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.recoveryGroupName"></a>

```typescript
public readonly recoveryGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList">DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig <a name="DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoveryreadinessRecoveryGroup } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecoveryreadinessRecoveryGroupConfig: dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53recoveryreadiness_recovery_group#id DataAwsccRoute53RecoveryreadinessRecoveryGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53RecoveryreadinessRecoveryGroupTags <a name="DataAwsccRoute53RecoveryreadinessRecoveryGroupTags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTags.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoveryreadinessRecoveryGroup } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecoveryreadinessRecoveryGroupTags: dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList <a name="DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoveryreadinessRecoveryGroup } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference <a name="DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoveryreadinessRecoveryGroup } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTags">DataAwsccRoute53RecoveryreadinessRecoveryGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53RecoveryreadinessRecoveryGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessRecoveryGroup.DataAwsccRoute53RecoveryreadinessRecoveryGroupTags">DataAwsccRoute53RecoveryreadinessRecoveryGroupTags</a>

---



