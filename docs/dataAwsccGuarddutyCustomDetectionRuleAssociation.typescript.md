# `dataAwsccGuarddutyCustomDetectionRuleAssociation` Submodule <a name="`dataAwsccGuarddutyCustomDetectionRuleAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociation <a name="DataAwsccGuarddutyCustomDetectionRuleAssociation" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/guardduty_custom_detection_rule_association awscc_guardduty_custom_detection_rule_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer"></a>

```typescript
import { dataAwsccGuarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

new dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation(scope: Construct, id: string, config: DataAwsccGuarddutyCustomDetectionRuleAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig">DataAwsccGuarddutyCustomDetectionRuleAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig">DataAwsccGuarddutyCustomDetectionRuleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct"></a>

```typescript
import { dataAwsccGuarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccGuarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccGuarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccGuarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccGuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGuarddutyCustomDetectionRuleAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGuarddutyCustomDetectionRuleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/guardduty_custom_detection_rule_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGuarddutyCustomDetectionRuleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList">DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList">DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociationConfig <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationConfig" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccGuarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

const dataAwsccGuarddutyCustomDetectionRuleAssociationConfig: dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/guardduty_custom_detection_rule_association#id DataAwsccGuarddutyCustomDetectionRuleAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGuarddutyCustomDetectionRuleAssociationTags <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTags" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags.Initializer"></a>

```typescript
import { dataAwsccGuarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

const dataAwsccGuarddutyCustomDetectionRuleAssociationTags: dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccGuarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

new dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccGuarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

new dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags">DataAwsccGuarddutyCustomDetectionRuleAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGuarddutyCustomDetectionRuleAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags">DataAwsccGuarddutyCustomDetectionRuleAssociationTags</a>

---



